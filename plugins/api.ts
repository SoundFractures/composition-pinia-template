import { Plugin } from '@nuxt/types'
import { onGlobalSetup, useContext } from '@nuxtjs/composition-api'
import { api } from '@/lib/api'

const plugin: Plugin = (_ctx, inject) => {
  onGlobalSetup(() => {
    const { $axios } = useContext()
    inject('api', api($axios))
  })
}

export default plugin
