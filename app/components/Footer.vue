<template>
  <footer class="footer">
    <div class="footer-container">

      <!-- Logo y copyright -->
      <div class="footer-column footer-brand">
        <div class="footer-brand-inner">
          <img src="/images/icon.png" alt="CCIP" class="logo-image">
          <p class="copyright">
            © 2026 CCIP. Todos los derechos reservados.<br>
            Soluciones en telecomunicaciones, redes y<br>
            seguridad tecnológica.
          </p>
        </div>
      </div>

      <!-- Servicios -->
      <div class="footer-column">
        <h3 class="footer-title">Servicios</h3>
        <ul class="footer-links">
          <li><NuxtLink to="/servicios/telecomunicaciones">Telecomunicaciones</NuxtLink></li>
          <li><NuxtLink to="/servicios/redes-telematica">Redes y Telemática</NuxtLink></li>
          <li><NuxtLink to="/servicios/seguridad-electronica">Seguridad Electrónica y Video Vigilancia</NuxtLink></li>
          <li><NuxtLink to="/servicios/energia-electrica">Energía Eléctrica</NuxtLink></li>
        </ul>
      </div>

      <!-- Pages -->
      <div class="footer-column">
        <h3 class="footer-title">Pages</h3>
        <ul class="footer-links">
          <li><NuxtLink to="/">Inicio</NuxtLink></li>
          <li><NuxtLink to="/proyectos">Proyectos</NuxtLink></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3 class="footer-title">&nbsp;</h3>
        <ul class="footer-links">
          <li><NuxtLink to="/servicios">Servicios</NuxtLink></li>
          <li><NuxtLink to="/contactanos">Contáctanos</NuxtLink></li>
        </ul>
      </div>

      <!-- Redes sociales dinámicas -->
      <div class="footer-column">
        <h3 class="footer-title">Redes</h3>
        <div class="social-icons">
          <a
            v-if="companySocial.facebook"
            :href="companySocial.facebook"
            target="_blank"
            rel="noopener"
            class="social-icon"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook"></i>
          </a>

          <a
            v-if="companySocial.whatsapp"
            :href="companySocial.whatsapp"
            target="_blank"
            rel="noopener"
            class="social-icon"
            aria-label="WhatsApp"
          >
            <i class="fab fa-whatsapp"></i>
          </a>

          <a
            v-if="companySocial.instagram"
            :href="companySocial.instagram"
            target="_blank"
            rel="noopener"
            class="social-icon"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            v-if="companySocial.email"
            :href="companySocial.email"
            class="social-icon"
            aria-label="Email"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { useCompanySocial } from '~/composables/useCompanySocial'

const { companySocial } = useCompanySocial()
</script>

<style scoped>
.footer {
  margin: 1rem;
  background-color: #5e5c5c50;
  padding: 60px 20px;
  color: #000000;
  border-radius: 30px;
}

.footer-container {
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 40px;
  align-items: start;
  border-radius: 30%;
}

/* Logo y Brand */
.footer-brand-inner {
  display: flex;
  align-items: center;
  gap: 1rem; /* espacio entre logo y texto */
}

.logo-image {
  height: 7rem;
  width: auto;
  object-fit: contain;
}

.footer-column {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #000;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  color: #000;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #003a70;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.social-icon {
  width: 40px;
  height: 40px;
  background-color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  text-decoration: none;
}

/* Responsive */
@media (max-width: 1200px) {
  .footer-container {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .footer-brand-inner {
    flex-direction: row;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 20px;
  }

  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-brand-inner {
    flex-direction: column; 
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .copyright {
    font-size: 0.85rem;
  }

  .footer-links a {
    font-size: 0.9rem;
  }

  .social-icon {
    width: 36px;
    height: 36px;
  }

  .social-icon svg {
    width: 18px;
    height: 18px;
  }
}
</style>
