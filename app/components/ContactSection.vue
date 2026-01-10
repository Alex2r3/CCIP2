<template>
  <section v-bind="$attrs" :id="$attrs.id || id" class="contact-section">
    <div class="contact-hero">
      <div class="contact-hero-overlay"></div>
      <div class="contact-hero-content">
        <h2 class="contact-title">CONTÁCTANOS</h2>
        <p class="contact-subtitle">Nos encantaría saber de usted</p>
      </div>
    </div>

    <div class="contact-container">

      <div class="contact-info">
          <div class="contact-info-layout">
        <h3 class="contact-info-title">
          DA EL PRIMER PASO, NOSOTROS 
          HAREMOS EL RESTO</h3>
        <div class="contact-details">
          <div class="contact-detail">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#1a3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>+51 992 275 316</span>
          </div>
          <div class="contact-detail">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#1a3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#1a3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Calle Peral 119 Int. 102 Cercado - Arequipa - Perú</span>
          </div>
          <div class="contact-detail">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#1a3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 6V12L16 14" stroke="#1a3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Lunes - Sábado: 09:00 - 18:00</span>
          </div>
          <div class="contact-detail">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#1a3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="#1a3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Corporación de Contratistas y Proveedores</span>
          </div>
        </div>
      </div>
      </div>

      <div class="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.653!2d-71.5158!3d-16.3988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDIzJzU1LjciUyA3McKwMzAnNTYuOSJX!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.contact-section {
  background: white;
}

/* HERO */
.contact-hero {
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  padding: 8rem 2rem 10rem;
  text-align: center;

  /* 👇 CLAVE: corte diagonal */
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}

.contact-hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 58, 95, 0.6);
}

.contact-hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-title {
  font-size: 4rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.contact-subtitle {
  font-size: 1.4rem;
  color: #ffffff;
}

/* CONTENIDO */
.contact-container {
  max-width: 1400px;
  margin: -6rem auto 0; 
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f8f9fa;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,.12);
}

.contact-info {
  padding: 4rem 3rem;
    display: flex;
  align-items: center;
}

.contact-info-title {
  font-size: 2rem;
  font-weight: 800;
  color: #000;
  margin-bottom: 3rem;
  padding-top: 4rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  
}

.contact-detail {
  display: block;
  gap: 1rem;
  font-size: 1.1rem;
  color: #333;
  position: relative;
  align-items: flex-start;
}

.contact-map {
  height: 100%;
  min-height: 500px;
}


/* RESPONSIVE */
@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
    margin-top: -4rem;
  }

  .contact-map {
    order: -1;
    min-height: 350px;
  }

  .contact-hero {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  }
}

@media (max-width: 768px) {
  .contact-title {
    font-size: 2.5rem;
  }

  .contact-subtitle {
    font-size: 1.2rem;
  }

  .contact-info {
    padding: 3rem 2rem;
  }
}
.contact-info-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr; /* texto grande | info */
  gap: 4rem;
  width: 100%;
  align-items: center;
}

.contact-info-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #000;
  line-height: 1.1;
  margin: 0;
   transform: translateX(-10px);
}

.contact-details {
  display: block;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}

.contact-detail {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  color: #333;
  font-size: 1.1rem;
}

.contact-detail svg {
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-detail span {
  line-height: 1.6;
}

.contact-map {
  height: 600px;
  width: 100%;
  background: #e0e0e0;
}

.contact-map iframe {
  width: 100%;
  height: 100%;
}

@media (max-width: 1024px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-map {
    height: 400px;
    order: -1;
  }

  .contact-hero {
    padding: 5rem 2rem;
        clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

  }

  .contact-title {
    font-size: 3rem;
  }
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 4rem 1.5rem;
  }

  .contact-title {
    font-size: 2.5rem;
  }

  .contact-subtitle {
    font-size: 1.2rem;
  }

  .contact-info {
    padding: 3rem 2rem;
  }
  .contact-info-layout {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .contact-info-title {
    font-size: 1.5rem;
  }

  .contact-detail {
    justify-content: center;
  }

  .contact-map {
    height: 350px;
  }
}
</style>

