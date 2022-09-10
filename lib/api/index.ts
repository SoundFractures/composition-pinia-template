// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import meetApi from '~/lib/api/Competition/Meet.api'

export const api = ($axios?: NuxtAxiosInstance) => {
  return {
    competition: {
      meet: meetApi($axios!),
    },
  }
}

export type Api = ReturnType<typeof api>
