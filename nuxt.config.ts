// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  modules: ["nuxt-windicss"],
  build: {
    transpile: ['chart.js']
  }
});
