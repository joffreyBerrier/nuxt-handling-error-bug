// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],

  i18n: {
    locales: [
      { code: "fr", iso: "fr-FR", name: "fr", file: "fr.json" },
      { code: "en", iso: "en-US", name: "en", file: "en.json" },
    ],
    strategy: "prefix",
    defaultLocale: "fr",
    rootRedirect: "fr",
    lazy: true,
    langDir: "lang/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
});
