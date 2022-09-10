// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { baseApi } from '~/lib/api/Base'
import { Meet, resource } from '~/lib/models/Competition/Meet.model'

const meetApi = ($axios: NuxtAxiosInstance) => {
  return baseApi<Meet>($axios, resource)
}

export default meetApi
