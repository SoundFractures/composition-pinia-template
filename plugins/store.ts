import { Plugin } from '@nuxt/types'
import { onGlobalSetup } from '@nuxtjs/composition-api'
import useVuex from '~/store'

const plugin: Plugin = (_ctx, inject) => {
  onGlobalSetup(() => {
    inject('vuex', useVuex())
  })
}

export default plugin
