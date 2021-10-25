import { Avaliacao } from '../types/Avaliacao'
import { AxiosResponse } from 'axios'
import JestAdapter from 'axios/lib/adapters/http'
import { api } from '../api'

export const apiTest = {
  get: (path: string): Promise<AxiosResponse<Avaliacao[]>> => {
    if (typeof process !== 'undefined') {
      api.defaults.adapter = JestAdapter
    }
    return api.get<Avaliacao[]>(path)
  },

  post: (path: string, object: Avaliacao): Promise<AxiosResponse<Avaliacao>> => {
    if (typeof process !== 'undefined') {
      api.defaults.adapter = JestAdapter
    }
    return api.post<Avaliacao>(path, object)
  },

  put: (path: string, object: Avaliacao): Promise<AxiosResponse<Avaliacao>> => {
    if (typeof process !== 'undefined') {
      api.defaults.adapter = JestAdapter
    }
    return api.put<Avaliacao>(path, object)
  },

  delete: (path: string) => {
    if (typeof process !== 'undefined') {
      api.defaults.adapter = JestAdapter
    }
    return api.delete(path)
  },
}
