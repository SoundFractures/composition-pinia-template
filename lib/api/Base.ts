// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export interface ListParams {
  member?: number
}

export interface QueryParams extends ListParams {
  limit: number
  offset: number
  order?: string
  desc?: boolean
  query?: string
}

// TODO | Enforce Error types and align response types
export const baseApi = <T>(axios: NuxtAxiosInstance, resource: string) => {
  const list = async (queryParams?: QueryParams): Promise<T[]> => {
    return await axios
      .$get(`${resource}/${genQueryParams(queryParams)}`)
      .then((response: T[]) => {
        return response
      })
      .catch((error: any) => {
        throw error
      })
  }

  const find = async (id: number): Promise<T> => {
    return await axios
      .$get(`${resource}/${id}`)
      .then((response: T) => {
        return response
      })
      .catch((error: any) => {
        throw error
      })
  }
  const create = async (id: number, payload: T): Promise<T> => {
    return await axios
      .$post(`${resource}/${id}`, payload)
      .then((response: T) => {
        return response
      })
      .catch((error: any) => {
        throw error
      })
  }
  const update = async (id: number, payload: T): Promise<T> => {
    return await axios
      .$patch(`${resource}/${id}`, payload)
      .then((response: T) => {
        return response
      })
      .catch((error: any) => {
        throw error
      })
  }

  const remove = async (id: number): Promise<T> => {
    return await axios
      .$delete(`${resource}/${id}`)
      .then((response: T) => {
        return response
      })
      .catch((error: any) => {
        throw error
      })
  }

  return {
    list,
    find,
    create,
    update,
    remove,
  }
}

// TODO | Find a workaround for any type
export const genQueryParams = (params?: QueryParams | any): string => {
  if (!params) return ''

  let queryParams: string = '?'
  const keys: string[] = Object.keys(params)

  keys.forEach((key) => {
    if (params[key]) {
      if (Array.isArray(params[key])) {
        params[key].forEach((value: any) => {
          queryParams = queryParams + `&${key}=${value}`
        })
      } else queryParams = queryParams + `&${key}=${params[key]}`
    }
  })
  return queryParams
}
