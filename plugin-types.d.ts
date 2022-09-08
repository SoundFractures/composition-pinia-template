// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vue from 'vue'
import { Api } from '@/utils/api'

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $api: Api
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $api: Api
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $api: Api
  }
}
