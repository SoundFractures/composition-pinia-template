import { Plugin } from '@nuxt/types'
import { onGlobalSetup, useContext, provide } from '@nuxtjs/composition-api'
import { api } from '@/utils/api'

const plugin: Plugin = (_ctx, inject) => {
  onGlobalSetup(() => {
    const { $axios } = useContext()
    inject('api', api($axios))
  })
}

export default plugin
