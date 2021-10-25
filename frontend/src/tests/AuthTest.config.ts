import { AxiosRequestConfig, AxiosResponse } from 'axios'

import JestAdapter from 'axios/lib/adapters/http'
import { Usuario } from '../types/Usuario'
import { authApi } from '../api'

export const authTest = {
  get: (
    path: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Usuario | Usuario[]>> => {
    if (typeof process !== 'undefined') {
      authApi.defaults.adapter = JestAdapter
    }
    return authApi.get<Usuario | Usuario[]>(path, config || { headers: {} })
  },

  post: (
    path: string,
    object:
      | {
          email: string
          password: string
        }
      | {},
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<any>> => {
    if (typeof process !== 'undefined') {
      authApi.defaults.adapter = JestAdapter
    }
    return authApi.post<any>(path, object, config)
  },
}
