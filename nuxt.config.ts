export default defineNuxtConfig({
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/scss/main.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  typescript: {
    strict: true,
  },
  modules: [
    "@nuxt/image-edge",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: true,
          download: true,
          inject: true,
        },
      },
    ],
  ],
});
