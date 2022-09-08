export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - pinia-composition',
    title: 'pinia-composition',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/global.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/api.ts', ssr: true },
    { src: '@/plugins/store.ts', ssr: true },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  loading: false,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    '@pinia/nuxt',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@pinia/nuxt',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: '/api',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: {
      icons: 'md',
    },
    icons: {
      iconfont: 'md',
    },
    customVariables: ['/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true,
      },
      themes: {
        light: {
          primary: '#0484B2',
          accent: '#2C9C84',
          secondary: '#65AEC8',
          info: '#51ACC6',
          warning: '#FF8000',
          error: '#EE4A4A',
          success: '#ABCB85',
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.CLIENT_ENV_API_URL_PUBLIC || '/api',
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.CLIENT_ENV_API_URL_PRIVATE || '/api',
    },
  },
}
