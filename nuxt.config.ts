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
    format: ['webp'],
    quality: 70,
    densities: [1, 2] // soporte retina sin penalizar performance
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
    // Node server para preview local
    preset: 'node-server',
    compressPublicAssets: true,
    // Cache headers (do NOT force Content-Encoding)
    routeRules: {
      '/images/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      '/_nuxt/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      '/videos/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      '/fonts/**': {
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      },
      '/**': {
        headers: {
          'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
      },
    },
    experimental: {
      wasm: true,
    },
    minify: true,
  },

  // Producción
  vite: {
    build: {
      minify: 'terser',
      cssMinify: true,
    },
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
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // Font Awesome - Cargado aquí para SSR correcto en producción
        { rel: 'preconnect', href: 'https://cdnjs.cloudflare.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css', crossorigin: 'anonymous' },
        // Preload fuentes Qanelas para mejor rendimiento
        { rel: 'preload', as: 'font', href: '/fonts/qanelas/Qanelas-Regular.woff2', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', href: '/fonts/qanelas/Qanelas-Medium.woff2', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', href: '/fonts/qanelas/Qanelas-SemiBold.woff2', type: 'font/woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', href: '/fonts/qanelas/Qanelas-Bold.woff2', type: 'font/woff2', crossorigin: 'anonymous' }
      ]
    }
  }
})
