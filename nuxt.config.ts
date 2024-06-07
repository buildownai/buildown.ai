// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: "https://buildown.ai",
    name: "BuildOwn.AI",
  },
  devtools: { enabled: true },
  linkChecker: {
    failOnError: true,
  },
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    cssPath: ["~/assets/css/main.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    preset: "cloudflare-pages",
  },

  modules: [
    "nitro-cloudflare-dev",
    "nuxt-icon",
    "@nuxt/content",
    "@nuxtjs/sitemap",
    "@nuxtjs/tailwindcss",
    "nuxt-simple-robots",
    "nuxt-link-checker",
    "@nuxtjs/turnstile",
  ],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  content: {
    documentDriven: true,
    highlight: {
      // Theme used in all color schemes.
      theme: "github-dark",
    },
    experimental: {
      search: {
        indexed: true,
      },
    },
  },
  turnstile: {
    siteKey: "0x4AAAAAAAcEaS8rsdqoEkpm",
    addValidateEndpoint: true,
  },

  runtimeConfig: {
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: "1x0000000000000000000000000000000AA",
    },
  },
});
