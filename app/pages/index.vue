<template>
  <div class="home-page">
    <Header />

    <section id="home" class="hero">
      <div class="hero-background">
        <video
          class="hero-video"
          autoplay
          muted
          loop
          playsinline
          src="/videos/0108.mp4"
        ></video>

        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <h1 class="hero-title">
          CORPORACIÓN DE CONTRATISTAS Y<br />
          PROVEEDORES GENERALES S.R.L.
        </h1>

        <div class="scroll-indicator" @click="handleScrollClick">
          ⌄
        </div>
      </div>
    </section>

    <section id="about">
      <AboutSection />
    </section>

    <section id="services">
      <ServicesSection />
    </section>

    <section id="projects">
      <ProjectsSection />
    </section>

    <section id="team">
      <TeamSection />
    </section>

    <section id="parter">
      <PartnersSection />
    </section>

    <section id="contact">
      <ContactSection />
    </section>

    <section id="footer">
      <Footer />
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHeaderScroll } from '@/composables/useHeaderScroll'

const { goToSection } = useHeaderScroll()

const handleScrollClick = () => {
  goToSection('about')
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
}

.hero {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 120px);
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(20%) brightness(0.9);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(105, 101, 101, 0.1);
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: rgb(255, 255, 255);
  line-height: 1.2;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px #2a0303e3;
  letter-spacing: -0.5px;
}

.scroll-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: bounce 2s infinite;
  cursor: pointer;
  margin: 0 auto;
  width: fit-content;
  transition: opacity 0.3s ease;
  color: white;
}

.scroll-indicator:hover {
  opacity: 0.7;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@media (max-width: 1024px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .hero {
    min-height: calc(100vh - 100px);
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.4rem;
  }
}
</style>
