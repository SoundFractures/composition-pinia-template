import { NuxtAxiosInstance } from '@nuxtjs/axios'
import meetApi from '~/utils/api/Competition/Meet.api'

export const api = ($axios?: NuxtAxiosInstance) => {
  return {
    competition: {
      meet: meetApi($axios!),
    },
  }
}

export type Api = ReturnType<typeof api>
