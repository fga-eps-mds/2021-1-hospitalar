import axios from 'axios'

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
  baseURL: 'api/',
  xsrfHeaderName: 'X-CSRFTOKEN',
  xsrfCookieName: 'csrftoken',
})

/**
 * Função que faz uma requisição ao backend para gerar um pdf e retorna ao front como um download
 * @param hospitalName O nome do hospital para nomear o pdf
 */
export const generatePDF = (hospitalName: string) => {
  axios({
    url: 'http://localhost:8000/api/secao/generatePDF/ ',
    method: 'GET',
    responseType: 'blob',
  })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', `${hospitalName}.pdf`)
      document.body.appendChild(link)
      link.click()
    })
    // eslint-disable-next-line no-console
    .catch(console.log)
}

export const avaliacao = () => {
  axios({
    url: 'http://127.0.0.1:8000/api/avaliacao/',
    method: 'GET',
    // responseType: 'blob',
  })
    .then((response) => response)
    // eslint-disable-next-line no-console
    .catch(console.log)
}
