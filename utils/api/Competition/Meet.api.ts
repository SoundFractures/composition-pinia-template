import { NuxtAxiosInstance } from '@nuxtjs/axios'
// import { useContext } from '@nuxtjs/composition-api'
import { baseApi } from '~/utils/api/Base'

const meetApi = ($axios: NuxtAxiosInstance) => {
  return baseApi<Object>($axios, '/competition/meet')
}

export default meetApi
