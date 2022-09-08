import { NuxtAxiosInstance } from '@nuxtjs/axios'
// import { useContext } from '@nuxtjs/composition-api'
import { baseApi } from '~/utils/api/Base'
import { Meet, resource } from '~/utils/models/Competition/Meet.model'

const meetApi = ($axios: NuxtAxiosInstance) => {
  return baseApi<Meet>($axios, resource)
}

export default meetApi
