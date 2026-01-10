<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Scroll global */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 120px; /* Altura del header sticky */
}


html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  font-family: -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    sans-serif;

  line-height: 1.6;
  color: #333;
}

/* Contenedor Nuxt */
#__nuxt {
  min-height: 100vh;
}

/* Respeto a accesibilidad */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

@supports not (scroll-behavior: smooth) {
  html {
    scroll-behavior: auto;
  }
}
</style>
<script setup>
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
    }
  ]
})
</script>