import { Api } from '@/utils/api'
import { VuexStore } from '@/store/index'

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $api: Api
    $vuex: VuexStore
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $api: Api
    $vuex: VuexStore
  }
}
