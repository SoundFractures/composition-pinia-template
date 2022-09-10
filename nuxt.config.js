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
  plugins: [{ src: '@/plugins/layout.ts', ssr: true }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  loading: false,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', { iconfont: 'mdi' }],
    '@nuxtjs/i18n',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],
  auth: {
    plugins: [
      { src: '@/plugins/init.ts', ssr: true },
      // { src: '@/plugins/api.ts', ssr: true },
      // { src: '@/plugins/store.ts', ssr: true },
    ],
    redirect: {
      login: '/login',
      logout: '/login',
      callback: '/login',
      home: '/dashboard',
    },
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access',
          global: true,
          type: 'Bearer',
        },
        user: {
          property: false,
          autoFetch: true,
        },
        refreshToken: {
          property: 'refresh',
          data: 'refresh',
          maxAge: 604800,
        },
        endpoints: {
          login: { url: '/accounts/auth/login/', method: 'post' },
          refresh: { url: '/accounts/auth/refresh/', method: 'post' },
          logout: false,
          user: {
            url: '/accounts/auth/user/',
            method: 'get',
          },
        },
      },
    },
  },

  router: {
    middleware: ['auth'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: '/api',
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en/index.ts' },
      { code: 'sl', iso: 'sl-SI', file: 'sl/index.ts' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    langDir: '~/locales/',
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_language',
    },
    parsePages: false,
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
