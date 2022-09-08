import Vue from 'vue'
import { Plugin } from '@nuxt/types'
import { onGlobalSetup } from '@nuxtjs/composition-api'
import useStore from '~/store'
Vue.config.silent = true
const plugin: Plugin = (_ctx, inject) => {
  onGlobalSetup(() => {
    inject('store', useStore)
  })
}

export default plugin
