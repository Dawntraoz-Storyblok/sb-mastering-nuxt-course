// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss","@nuxtjs/color-mode", "@vueuse/nuxt"],
 tailwindcss: {
 // Defaults options
  // cssPath: '~/assets/css/tailwind.css',
  // configPath: 'tailwind.config',
  exposeConfig: true,
  // config: {},
  // injectPosition: 0,
  // viewer: true,
 },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    //hid: 'nuxt-color-mode-script',
    // globalName: '__NUXT_COLOR_MODE__',
    // componentName: 'ColorScheme',
    // classPrefix: '',
    dataValue: 'theme',
    classSuffix: '-color-mode',
    // storageKey: 'nuxt-color-mode'
  }
});
