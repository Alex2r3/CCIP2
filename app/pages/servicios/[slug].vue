<template>
  <div class="service-detail-page">

    <!-- Header -->
    <Header />   <!-- <-- Aquí lo agregas arriba de todo -->

    <!-- Hero -->
    <section v-if="service" class="hero-section">
      <div class="hero-overlay"></div>
      <img :src="service.heroImage || service.image" :alt="service.title" class="hero-image" />
      <h1 class="hero-title">{{ service.title }}</h1>
      <p v-if="service.longDescription" class="hero-description">{{ service.longDescription }}</p>
    </section>

    <!-- Subservices / links dinámicos -->
    <section v-if="service?.subServices?.length" class="services-grid">
      <div
        v-for="(sub, index) in service.subServices"
        :key="index"
        class="service-card"
        :class="{ 'service-card-tall': index === 1 }"
      >
        <div class="card-overlay"></div>
        <img :src="sub.image" class="card-image" />
        <div class="card-content">
          <h2 class="card-title">{{ sub.title }}</h2>
          <p class="card-description" v-html="sub.description"></p>
        </div>
      </div>
    </section>

    <!-- Fallback si no existe el servicio -->
    <section v-if="!service" class="service-detail">
      <div class="container">
        <h1 class="title">Servicio no encontrado</h1>
        <p class="description">Este servicio no existe.</p>
        <NuxtLink to="/" class="back-btn">← Volver</NuxtLink>
      </div>
    </section>

  </div>

  <section id="footer">
      <Footer />
  </section>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getServiceBySlug } from '@/composables/useServices'
import type { Service } from '@/composables/useServices'
import Header from '@/components/Header.vue'

const route = useRoute()
const slug = route.params.slug as string

const service: Service | undefined = getServiceBySlug(slug)

useSeoMeta({
  title: service ? `${service.title} | CCIP` : 'Servicio no encontrado | CCIP',
  description: service?.description || 'CCIP servicios'
})
</script>


<style scoped>
/* === Hero === */
.hero-section {
  position: relative;
  height: 400px;
}
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
}
.hero-title {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
  text-align: center;
}
.hero-description {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  color: white;
  font-size: 1.2rem;
}

/* === Grid === */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 1rem 1rem 1rem 1rem;
}

.service-card {
  position: relative;
  height: 400px;
  border-radius: 14px;
  overflow: hidden;
}

.service-card-tall {
  grid-row: span 2;
  height: 820px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(20, 40, 80, 0.6),
    rgba(30, 50, 100, 0.85)
  );
}

.card-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.card-logo {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(40, 60, 100, 0.9);
  color: white;
  padding: 6px 14px;
  border-radius: 20px;
}

/* === Fallback === */
.service-detail {
  padding: 4rem 2rem;
}

.container {
  max-width: 900px;
  margin: auto;
}

.title {
  font-size: 2.5rem;
  color: #1a3a5f;
}

.description {
  margin-top: 1rem;
  font-size: 1.1rem;
}

.back-btn {
  display: inline-block;
  margin-top: 2rem;
  font-weight: 600;
  color: #1a3a5f;
}

/* === Responsive === */
@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .service-card-tall {
    height: 400px;
  }

  .hero-title {
    font-size: 2rem;
  }
}
</style>
