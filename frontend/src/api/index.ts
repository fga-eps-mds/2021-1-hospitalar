import axios from 'axios'

export const api = axios.create({
  baseURL: 'api/',
  xsrfHeaderName: 'X-CSRFTOKEN',
  xsrfCookieName: 'csrftoken',
})
