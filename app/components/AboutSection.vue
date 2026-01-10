<template>
  <section v-bind="$attrs" :id="$attrs.id || id" class="about-section">
    <div class="about-container">
      <div class="about-image">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Trabajador técnico" />

      </div>
      
      <div class="about-content">
        <div class="about-title-box">
          <h2>Sobre Nosotros</h2>
        </div>
        
        <p class="about-text">
          Somos Una Empresa Dedicada A La Innovación Y Uso De Las Tecnologias De La Información
        </p>
        
        <ul class="services-list">
          <li>Telecomunicaciones</li>
          <li>Redes y Telematica</li>
          <li>Energía Eléctrica</li>
          <li>Seguridad Electrónica y Video Vigilancia</li>
        </ul>
        
        <p class="about-text">
          Con personal capacitado y experiencia en proyectos a nivel nacional
        </p>
        
        <button class="discover-btn">
          Descubre más
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
    default: ''
  }
})

// Debug: verificar que el ID se esté recibiendo
onMounted(() => {
  console.log('🔵 AboutSection montado con ID:', props.id)
  const section = document.getElementById(props.id)
  console.log('🔵 AboutSection elemento encontrado:', section)
})
</script>

<style scoped>
.about-section {
  padding: 4rem 2rem;
  background: white;
}

.about-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-image {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 8px;
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-overlay {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.logo-small {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #1a3a5f;
  border-radius: 50%;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  text-transform: lowercase;
}

.logo-dot {
  position: absolute;
  top: 6px;
  right: 10px;
  color: #00ff88;
  font-size: 0.7rem;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-title-box {
  background: #1a3a5f;
  color: white;
  padding: 1rem 2rem;
  display: inline-block;
  width: fit-content;
}

.about-title-box h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.services-list li {
  padding: 0.5rem 0;
  font-size: 1rem;
  color: #555;
  position: relative;
  padding-left: 1.5rem;
}

.services-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #1a3a5f;
  font-size: 1.5rem;
}

.discover-btn {
  background: #1a3a5f;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  width: fit-content;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.discover-btn:hover {
  background: #2a4a6f;
  transform: translateY(-2px);
}

@media (max-width: 968px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about-image {
    height: 400px;
  }
}
</style>


