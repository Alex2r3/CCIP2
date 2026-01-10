<template>
  <header ref="headerRef" class="header">
    <div class="header-content">

      <!-- Logo -->
      <NuxtLink to="/" class="logo" aria-label="Inicio">
        <img src="/images/icon.png" alt="CCIP" class="logo-image" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="nav desktop-nav">
        <a
          class="nav-link"
          :class="{ active: activeSection === 'home' }"
          @click.prevent="goToSection('home')"
        >Inicio</a>

        <a
          class="nav-link"
          :class="{ active: activeSection === 'services' }"
          @click.prevent="goToSection('services')"
        >Servicios</a>

        <a
          class="nav-link"
          :class="{ active: activeSection === 'projects' }"
          @click.prevent="goToSection('projects')"
        >Proyectos</a>
      </nav>

      <!-- Desktop button -->
      <button class="contact-btn desktop-only" @click.prevent="goToSection('contact')">
        Contáctanos
      </button>

      <!-- Mobile button -->
      <button class="menu-btn mobile-only" @click="toggleMenu">
        <i :class="isMenuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>

      <!-- Mobile Menu (DENTRO del header-content) -->
      <div v-if="isMenuOpen" class="mobile-menu">
        <a @click.prevent="navigate('home')">Inicio</a>
        <a @click.prevent="navigate('services')">Servicios</a>
        <a @click.prevent="navigate('projects')">Proyectos</a>
        <button @click.prevent="navigate('contact')">Contáctanos</button>
      </div>

    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHeaderScroll } from '@/composables/useHeaderScroll'

const {
  headerRef,
  activeSection,
  goToSection
} = useHeaderScroll()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navigate = (section: string) => {
  goToSection(section)
  isMenuOpen.value = false
}

/* 🔥 FIX: cerrar menú al cambiar a desktop */
const handleResize = () => {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
/* Header base */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  pointer-events: none;
}

.header-content {
  pointer-events: auto;
  position: relative;

  max-width: 1400px;
  margin: 1rem auto;
  padding: 1rem 2rem;

  background: rgba(255, 255, 255, 0.62);
  backdrop-filter: blur(10px);
  border-radius: 40px;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo-image {
  height: 4rem;
}

/* Nav */
.nav {
  display: flex;
  gap: 2rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  color: #1a3a5f;
  font-weight: 500;
  cursor: pointer;
}

.nav-link.active {
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Buttons */
.contact-btn {
  background: #1a3a5f;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
}

.menu-btn {
  background: none;
  border: none;
  font-size: 1.6rem;
  color: #1a3a5f;
  cursor: pointer;
}

/* Helpers */
.desktop-only {
  display: inline-flex;
}

.mobile-only {
  display: none;
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: calc(100% + 0.75rem);
  left: 0;
  width: 100%;

  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

.mobile-menu a,
.mobile-menu button {
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  background: none;
  border: none;
  color: #1a3a5f;
  cursor: pointer;
}

.mobile-menu button {
  background: #1a3a5f;
  color: white;
  padding: 0.6rem;
  border-radius: 8px;
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-nav,
  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: inline-flex;
  }
}
</style>
