// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  /* ===============================
     MÓDULOS
  =============================== */
  modules: ['@nuxt/image'],

  /* ===============================
     NUXT IMAGE (OPTIMIZADO)
  =============================== */
  image: {
    // Configuración para Vercel - usar ipx que funciona bien en producción
    provider: 'ipx',
    format: ['webp', 'avif'],
    quality: 70, // Reducir calidad para mejor compresión
    densities: [1, 2], // soporte retina sin penalizar performance
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      service: {
        modifiers: {
          format: 'webp',
          quality: 75, // Reducido de 80 a 75
        }
      },
      partner: {
        modifiers: {
          format: 'webp',
          quality: 70, // Reducido de 75 a 70
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          quality: 75,
        }
      }
    },
    // Configuración para producción en Vercel
    ipx: {
      maxAge: 31536000
    }
  },

  /* ===============================
     CSS GLOBAL
  =============================== */
  css: [
    '@/assets/css/main.css'
  ],

  /* ===============================
     DIRECTORIO BASE
  =============================== */
  srcDir: 'app',

  /* ===============================
     DEV SERVER
  =============================== */
  devServer: {
    port: 3000,
    host: 'localhost'
  },

  /* ===============================
     NITRO
  =============================== */
  nitro: {
    compressPublicAssets: true,
    // Configurar headers de cache y compresión
    routeRules: {
      '/images/**': { 
        headers: { 
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Content-Encoding': 'gzip'
        } 
      },
      '/_nuxt/**': { 
        headers: { 
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Content-Encoding': 'gzip'
        } 
      },
      '/videos/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      },
      '/**': {
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=86400'
        }
      }
    },
    // Comprimir respuestas
    experimental: {
      wasm: true
    },
    // Comprimir todas las respuestas
    minify: true
  },

  // Comprimir en producción
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true
    }
  },

  /* ===============================
     CONFIGURACIÓN GLOBAL
  =============================== */
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'CCIP - Nuxt 4',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Proyecto CCIP desarrollado con Nuxt'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
