import { NuxtI18nInstance } from '@nuxtjs/i18n'
import { Framework as Vuetify } from 'vuetify/types'
import { Notify } from './plugins/notify'
import { Layout } from '@/plugins/layout'
import { Api } from '@/lib/api'
import { VuexStore } from '@/store/index'

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $api: Api
    $vuex: VuexStore
    $i18n: NuxtI18nInstance
    $layout: Layout
    $vuetify: Vuetify
    $notify: Notify
  }
}
declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $api: Api
    $vuex: VuexStore
    $i18n: NuxtI18nInstance
    $layout: Layout
    $vuetify: Vuetify
    $notify: Notify
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $api: Api
    $vuex: VuexStore
    $i18n: NuxtI18nInstance
    $layout: Layout
    $vuetify: Vuetify
    $notify: Notify
  }
}
