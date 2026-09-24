// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  ssr: false, // Cпециально для SPA, если нужно только статику, оставляем true
  nitro: {
    preset: "static",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;',
        },
      },
    },
  },
  css: ["~/assets/scss/main.scss", "~/assets/scss/_fonts.scss"],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  app: {
    head: {
      title: "Мастерская Арт П.А.Р.К - Производитель изделий из ультрабетона.",
      meta: [
        {
          name: "description",
          content:
            "Мастерская Арт П.А.Р.К - Производитель изделий из ультрабетона.",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/logo/favicon-2-512-512.png" },
      ],
      htmlAttrs: {
        lang: "ru",
      },
    },
  },
});
