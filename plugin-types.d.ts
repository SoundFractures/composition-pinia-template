import { Api } from '@/utils/api'
import { Store } from '@/store'

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $api: Api
    $store: Store
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $api: Api
    $store: Store
  }
}
