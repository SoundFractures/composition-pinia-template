import { Plugin } from '@nuxt/types'
import { onGlobalSetup, useContext } from '@nuxtjs/composition-api'
import useVuex from '~/store'
import { api } from '@/lib/api'

const plugin: Plugin = (_ctx, inject) => {
  onGlobalSetup(() => {
    const { $axios } = useContext()
    inject('api', api($axios))
    inject('vuex', useVuex())
  })
}

export default plugin
