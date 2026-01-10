<template>
    <section v-bind="$attrs" :id="($attrs as any).id || id" class="services-section">
    <div class="services-container">
      <div class="services-sidebar">
        <h2 class="services-label">SERVICIOS</h2>
      </div>
      
      <div class="services-grid">
        <div v-for="service in services" :key="service.slug" class="service-card">
          <div class="service-image">
            <img :src="service.image" :alt="service.title" />
            <div class="watermark">ccip</div>

          </div>
          
          <div class="service-content">
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <NuxtLink :to="`/servicios/${service.slug}`" class="service-btn">DETALLES</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
 

  
</template>


<script setup lang="ts">
import type { Service } from '~/composables/useServices'
import { getAllServices } from '~/composables/useServices'

defineProps<{
  id?: string
}>()

const services: Service[] = getAllServices()
</script>


<style scoped>
.services-section {
  padding: 4rem 0;
  background: white;
}

.services-container {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
}

.services-sidebar {
  background: #1a3a5f;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  flex-shrink: 0;
}

.services-label {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 0.2rem;
  margin: 0;
}

.services-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem;
}

.service-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.service-image {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 6rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.46);
  text-transform: lowercase;
  pointer-events: none;
  z-index: 1;
  white-space: nowrap;
}

.logo-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
}

.logo-small {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #1a3a5f;
  border-radius: 50%;
  color: white;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: lowercase;
}

.logo-dot {
  position: absolute;
  top: 5px;
  right: 8px;
  color: #00ff88;
  font-size: 0.6rem;
}

.service-content {
  padding: 1.5rem;
}

.service-title {
  color: #1a3a5f;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.service-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.service-btn {
  background: #8dc63f;
  color: white;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.service-btn:hover {
  background: #7db32f;
  transform: translateY(-2px);
}

@media (max-width: 968px) {
  .services-container {
    flex-direction: column;
  }

  .services-sidebar {
    width: 100%;
    padding: 1rem;
  }

  .services-label {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    font-size: 1.5rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
}
</style>

