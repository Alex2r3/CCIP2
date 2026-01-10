<template>
  <section v-bind="$attrs" :id="($attrs as any).id || id" class="partners-section">
    <div
      v-for="(group, groupIndex) in partnerGroups"
      :key="groupIndex"
      class="partner-group"
    >
      <div class="partner-group-header">
        <h2 class="partner-group-title">
          {{ group.title }}
        </h2>
      </div>

<div class="partner-logos">
  <div class="logos-track">
    <!-- Lista original -->
    <div
      v-for="(partner, index) in group.partners"
      :key="'a-' + index"
      class="partner-logo"
    >
      <img
        :src="partner.image"
        :alt="partner.alt || 'Partner logo'"
        class="partner-image"
      />
    </div>

    <!-- Lista duplicada (para efecto infinito) -->
    <div
      v-for="(partner, index) in group.partners"
      :key="'b-' + index"
      class="partner-logo"
    >
      <img
        :src="partner.image"
        :alt="partner.alt || 'Partner logo'"
        class="partner-image"
      />
    </div>
  </div>
</div>
</div>


  </section>
</template>

<script setup lang="ts">
import { usePartners } from '@/composables/usePartners'

defineProps({
  id: {
    type: String,
    default: ''
  }
})

const { partnerGroups } = usePartners()
</script>

<style scoped>
.partners-section {
  background: white;
  padding: 4rem 0;
}

/* === Grupo === */
.partner-group {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 4rem;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

/* === Header === */
.partner-group-header {
  background: #1a3a5f;
  display: flex;
  align-items: center;
  padding: 3rem 2rem;
}

.partner-group-title {
  color: white;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
}

/* === Carrusel === */
.partner-logos {
  background: white;
  overflow: hidden;
  padding: 3rem 2rem;
  position: relative;
}

/* Pista que se mueve */
.logos-track {
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: scroll-left 30s linear infinite;
}

/* Logo */
.partner-logo {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 1rem;
}

.partner-image {
  max-height: 70px;
  max-width: 160px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.8;
  transition: all 0.3s ease;
}

.partner-image:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

/* Pausar al hover */
.partner-logos:hover .logos-track {
  animation-play-state: paused;
}

/* Animación infinita */
@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* === Responsive === */
@media (max-width: 1024px) {
  .partner-group {
    grid-template-columns: 1fr;
  }

  .partner-group-header {
    padding: 2rem 1.5rem;
  }

  .partner-group-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 768px) {
  .partner-logo {
    height: 80px;
  }

  .partner-image {
    max-height: 60px;
    max-width: 140px;
  }
}
</style>
