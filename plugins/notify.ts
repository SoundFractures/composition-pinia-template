/* eslint-disable @typescript-eslint/no-unused-vars */
import { Plugin } from '@nuxt/types'
import { COLORS, Snackbar } from '~/lib/models'
import { Mutations } from '@/store'

type NotifyOptions = {
  message: Snackbar['message']
  timeout?: Snackbar['timeout']
}

export interface Notify {
  info: (options: NotifyOptions) => void
  success: (options: NotifyOptions) => void
  warning: (options: NotifyOptions) => void
  error: (options: NotifyOptions) => void
}

const notify: Plugin = (ctx, inject) => {
  const handleSnackbar = (snackbar: Snackbar) => {
    ctx.$vuex.commit(Mutations.layout.LAYOUT_SET_SNACKBAR, snackbar)
  }
  const methods = {
    info: (options: NotifyOptions) => {
      handleSnackbar({ ...options, color: COLORS.INFO })
    },
    success: (options: NotifyOptions) => {
      handleSnackbar({ ...options, color: COLORS.SUCCESS })
    },
    warning: (options: NotifyOptions) => {
      handleSnackbar({ ...options, color: COLORS.WARNING })
    },
    error: (options: NotifyOptions) => {
      handleSnackbar({ ...options, color: COLORS.ERROR })
    },
  }

  inject('notify', methods)
}

export default notify
