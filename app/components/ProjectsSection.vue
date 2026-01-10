<template>
  <section v-bind="$attrs" :id="($attrs as any).id || id" class="projects-section">
    <div class="projects-container">
      <h2 class="projects-title">Nuestros Proyectos</h2>

      <div class="carousel-wrapper">
        <div
          class="carousel-container"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
          @touchend="handleTouchEnd"
        >
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="carousel-slide"
            >
              <img :src="project.image" :alt="project.title" />

              <!-- overlay oscuro -->
              <div class="image-dark-overlay"></div>

              <!-- texto -->
              <div class="project-overlay">
                <p class="project-text">{{ project.title }}</p>
              </div>
            </div>
          </div>

          <!-- botones -->
          <button
            class="carousel-btn carousel-btn-prev"
            @click="previousSlide"
            aria-label="Proyecto anterior"
          >
            ‹
          </button>

          <button
            class="carousel-btn carousel-btn-next"
            @click="nextSlide"
            aria-label="Siguiente proyecto"
          >
            ›
          </button>
        </div>

        <!-- dots -->
        <div class="carousel-dots">
          <button
            v-for="(_, index) in projects"
            :key="index"
            class="carousel-dot"
            :class="{ active: currentIndex === index }"
            @click="goToSlide(index)"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Project } from '~/composables/useProjects'
import { getAllProjects } from '~/composables/useProjects'

/* props */
defineProps<{
  id?: string
}>()

/* data */
const projects: Project[] = getAllProjects()
const currentIndex = ref<number>(0)

/* touch */
let touchStartX = 0
let touchEndX = 0

/* autoplay */
let autoPlayInterval: ReturnType<typeof setInterval> | null = null

/* methods */
const nextSlide = (): void => {
  currentIndex.value = (currentIndex.value + 1) % projects.length
}

const previousSlide = (): void => {
  currentIndex.value =
    currentIndex.value === 0 ? projects.length - 1 : currentIndex.value - 1
}

const goToSlide = (index: number): void => {
  currentIndex.value = index
}

const handleTouchStart = (e: TouchEvent): void => {
  const touch = e.touches.item(0)
  if (!touch) return
  touchStartX = touch.clientX
}

const handleTouchMove = (e: TouchEvent): void => {
  const touch = e.touches.item(0)
  if (!touch) return
  touchEndX = touch.clientX
}

const handleTouchEnd = (): void => {
  if (touchStartX - touchEndX > 50) nextSlide()
  if (touchEndX - touchStartX > 50) previousSlide()
}

/* autoplay control */
const startAutoPlay = (): void => {
  autoPlayInterval = setInterval(nextSlide, 5000)
}

const stopAutoPlay = (): void => {
  if (autoPlayInterval) clearInterval(autoPlayInterval)
}

/* lifecycle */
onMounted(startAutoPlay)
onUnmounted(stopAutoPlay)
</script>


<style scoped>
.projects-section {
  padding: 0;
  background: #1a3a5f;
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
}

.projects-title {
  color: white;
  font-size: 3rem;
  font-weight: 700;
  padding: 3rem 2rem 2rem;
  margin: 0;
  text-align: center;
}

/* =========================
   CAROUSEL
========================= */

.carousel-wrapper {
  position: relative;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  user-select: none;
  border-radius: 30px;
}

.carousel-track {
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  position: relative;
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* =========================
   OVERLAY OSCURO (PRO)
========================= */

.project-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to right,
      rgba(53, 50, 50, 0.92) 0%,
      rgba(14, 6, 6, 0.8) 35%,
      rgba(2, 1, 1, 0.71) 60%,
      rgba(255, 244, 244, 0.27) 80%,
      transparent 100%
    ),
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.55),
      transparent 70%
    );
  display: flex;
  align-items: center;
  padding: 8%;
}


.project-text {
  color: #ffffffff;
  font-size: 2rem;
  font-weight: 600;
  max-width: 600px;
  margin: 0;
}

/* =========================
   BOTONES
========================= */

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(242, 244, 255, 0.55);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.3s ease;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.85);
  transform: translateY(-50%) scale(1.1);
}

.carousel-btn-prev {
  left: 20px;
}

.carousel-btn-next {
  right: 20px;
}

/* =========================
   DOTS
========================= */

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 2rem;
}

.carousel-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dot:hover {
  background: rgba(255, 255, 255, 0.4);
}

.carousel-dot.active {
  width: 30px;
  border-radius: 6px;
  background: white;
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 768px) {
  .projects-title {
    font-size: 2rem;
    padding: 2rem 1rem 1.5rem;
  }

  .carousel-container {
    height: 400px;
  }

  .project-text {
    font-size: 1.2rem;
  }

  .project-overlay {
    padding: 2rem 1rem 1.5rem;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
  }

  .carousel-btn-prev {
    left: 10px;
  }

  .carousel-btn-next {
    right: 10px;
  }
}

</style>

