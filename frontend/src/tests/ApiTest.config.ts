import { Avaliacao } from '../types/Avaliacao'
import { AxiosResponse } from 'axios'
import JestAdapter from 'axios/lib/adapters/http'
import { api } from '../api'

export const apiTest = {
  get: (path: string, config: any): Promise<AxiosResponse<Avaliacao[]>> => {
    if (typeof process !== 'undefined') {
      api.defaults.adapter = JestAdapter
    }
    return api.get<Avaliacao[]>(path, config)
  },

  post: (
    path: string,
    object: Avaliacao,
    config: any
  ): Promise<AxiosResponse<Avaliacao>> => {
    if (typeof process !== 'undefined') {
      api.defaults.adapter = JestAdapter
    }
    return api.post<Avaliacao>(path, object, config)
  },

  put: (
    path: string,
    object: Avaliacao,
    config: any
  ): Promise<AxiosResponse<Avaliacao>> => {
    if (typeof process !== 'undefined') {
      api.defaults.adapter = JestAdapter
    }
    return api.put<Avaliacao>(path, object, config)
  },

  delete: (path: string, config: any) => {
    if (typeof process !== 'undefined') {
      api.defaults.adapter = JestAdapter
    }
    return api.delete(path, config)
  },
}
