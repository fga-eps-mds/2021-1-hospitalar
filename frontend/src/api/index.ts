import axios, { AxiosRequestConfig } from 'axios'

/**
 * Objeto baseado no axios que nós usaremos para fazer requisições http
 *
 * Para usar importe essa constante,
 * digite a url configurada do backend (omita http://localhost:8000/api)
 * e chame os métodos get, post, put e delete.
 *
 * Esses métodos são assíncronos e deve ter cuidados especiais.
 * Sempre chame o método catch depois da requisição.
 *
 * obs: sempre termine a url com uma '/'
 *
 * ex:
 *    api.get('todo/').catch(console.log)
 *
 * @see https://github.com/axios/axios
 */
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  xsrfHeaderName: 'X-CSRFTOKEN',
  xsrfCookieName: 'csrftoken',
})

export const authApi = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API_URL, // 'http://localhost:3333/auth/',
  xsrfHeaderName: 'X-CSRFTOKEN',
  xsrfCookieName: 'csrftoken',
})

export const CONFIG = (token: string | null) => {
  const auth: AxiosRequestConfig = {
    headers: {
      Authorization: `Token ${token}`,
    },
  }

  return auth
}

/**
 * Função que faz uma requisição ao backend para gerar um pdf e retorna ao front como um download
 * @param hospitalName O nome do hospital para nomear o pdf
 */
export const generatePDF = (codigoAvaliacao: string, token: string) => {
  axios({
    url: `${process.env.REACT_APP_API_URL}avaliacao/generatePDF/`,
    method: 'POST',
    responseType: 'blob',
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      codigo: codigoAvaliacao,
    },
  })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${codigoAvaliacao}.pdf`)
      document.body.appendChild(link)
      link.click()
    })
    // eslint-disable-next-line no-console
    .catch(console.log)
}
