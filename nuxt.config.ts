// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  
  // Directorio fuente de la aplicación
  srcDir: 'app',
  
  // Configuración del servidor de desarrollo
  devServer: {
    port: 3000,
    host: 'localhost'
  },
  
  // Configuración de la app
  app: {
    head: {
      title: 'CCIP - Nuxt 4',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Proyecto Nuxt 4' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})


