import { Plugin } from '@nuxt/types'
import { onGlobalSetup, useContext } from '@nuxtjs/composition-api'
import { Mutations } from '~/store'

export interface Layout {
  switchLocale: (value?: string) => Promise<string>
  isMobile: () => boolean
  navigation: {
    show: () => boolean
    handleDrawer: (value?: boolean) => void
  }
}

const plugin: Plugin = (ctx, inject) => {
  onGlobalSetup(() => {
    const { i18n } = useContext()
    inject('i18n', i18n)
  })
  const layout = {
    switchLocale: async (value: string) => {
      ctx.$vuex.commit(Mutations.layout.LAYOUT_SET_LOADING_APP, true)
      await ctx.i18n.setLocale(value)
      await ctx.i18n.setLocaleCookie(value)
      await setTimeout(() => {
        ctx.$vuex.commit(Mutations.layout.LAYOUT_SET_LOADING_APP, false)
      }, 1500)
    },
    isMobile: () => {
      return ctx.$vuetify.breakpoint.xs
    },

    navigation: {
      show: () => {
        return ctx.$vuetify.breakpoint.lgAndUp
      },
      handleDrawer: (value = true as boolean) => {
        ctx.$vuex.commit(Mutations.layout.LAYOUT_SET_NAVIGATION_DRAWER, value)
      },
    },
  }
  inject('layout', layout)
}

export default plugin
