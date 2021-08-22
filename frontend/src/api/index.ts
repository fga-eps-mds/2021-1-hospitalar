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
