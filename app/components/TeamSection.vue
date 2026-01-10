<template>
  <section v-bind="$attrs" :id="($attrs as any).id || id" class="team-section">
    <div class="team-hero">
      <div class="team-hero-overlay"></div>
      <div class="team-hero-content">
        <h2 class="team-title">NUESTRO EQUIPO</h2>
        <p class="team-subtitle">
          Ofrecemos servicios especializados para satisfacer las necesidades tecnológicas más exigentes de su empresa
        </p>
      </div>
    </div>

    <div class="team-container">
      <div class="team-grid">
        <div v-for="(member, index) in teamMembers" :key="index" class="team-card">
          <div class="team-card-inner">
            <!-- Avatar / Imagen del miembro -->
            <div class="team-avatar">
              <img
                v-if="member.avatar"
                :src="member.avatar"
                :alt="member.name"
              />
              <div v-else class="default-avatar">
                {{ member.name[0] }}
              </div>
            </div>

            <!-- Info del miembro -->
            <div class="team-info">
              <h3 class="team-member-name">{{ member.name }}</h3>
              <p class="team-member-position">{{ member.position }}</p>
            </div>

            <!-- Redes sociales -->
            <div class="team-social" v-if="member.social && Object.keys(member.social).length > 0">
              <!-- Facebook -->
              <a
                v-if="member.social?.facebook"
                :href="member.social.facebook"
                target="_blank"
                rel="noopener"
                class="social-icon"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook"></i>
              </a>

              <!-- WhatsApp -->
              <a
                v-if="member.social?.whatsapp"
                :href="member.social.whatsapp"
                target="_blank"
                rel="noopener"
                class="social-icon"
                aria-label="WhatsApp"
              >
                <i class="fab fa-whatsapp"></i>
              </a>

              <!-- Instagram -->
              <a
                v-if="member.social?.instagram"
                :href="member.social.instagram"
                target="_blank"
                rel="noopener"
                class="social-icon"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <!-- Email -->
              <a
                v-if="member.social?.email"
                :href="member.social.email"
                class="social-icon"
                aria-label="Email"
              >
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useTeam } from '~/composables/useTeam'

defineProps({
  id: {
    type: String,
    default: ''
  }
})

const { teamMembers } = useTeam()
</script>

<style scoped>
.team-section {
  background: white;
}

.team-hero {
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  padding: 6rem 2rem;
  text-align: center;
}

.team-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 58, 95, 0.7);
}

.team-hero-content {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

.team-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.team-subtitle {
  font-size: 1.2rem;
  color: #e0e0e0;
  margin: 0 auto;
  max-width: 800px;
}

.team-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.team-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.15);
}

.team-card-inner {
  padding: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

/* Avatar con imagen */
.team-avatar {
  display: flex;
  justify-content: center;
}

.team-avatar img {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}

/* Avatar por defecto si no hay imagen */
.default-avatar {
  width: 80px;
  height: 80px;
  background-color: #1a3a5f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  border-radius: 8px;
}

.team-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.team-member-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a3a5f;
  margin: 0;
  text-transform: uppercase;
}

.team-member-position {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

.team-social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  min-height: 50px;
  width: 100%;
}

.social-icon {
  color: #999;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  flex-shrink: 0;
}

.social-icon:hover {
  color: #1a3a5f;
  transform: scale(1.1);
}

.social-icon i {
  font-size: 20px;
}

@media (max-width: 768px) {
  .team-title {
    font-size: 2.5rem;
  }
  .team-subtitle {
    font-size: 1rem;
  }
  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
  .team-hero {
    padding: 4rem 1.5rem;
  }
}
</style>