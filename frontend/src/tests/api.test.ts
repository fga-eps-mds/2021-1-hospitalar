import { Avaliacao } from '../types/Avaliacao'
import { apiTest } from './ApiTest.config'

const TIMELIMIT = 1000

test(
  'Teste de requisição GET',
  async () => {
    const response = await apiTest.get('avaliacao/')

    expect(response.status).toBe(200)
  },
  TIMELIMIT
)

let idAvaliacaoCriada: number | undefined

test(
  'Teste de requisição POST',
  async () => {
    const avaliacao: Avaliacao = {
      codigo: `Teste ${Math.random() * 100}`,
      nomeHospital: 'Hospital de teste,HTT',
      idsAvaliadores: '',
      data: new Date().toISOString(),
      configuracao: {},
      secoes: [],
    }

    const response = await apiTest.post('avaliacao/', avaliacao)

    expect(response.status).toBe(201)
    expect(response.data).toBeTruthy()
    expect(response.data.id).toBeTruthy()

    idAvaliacaoCriada = response.data.id
  },
  TIMELIMIT
)

test(
  'Teste de requisição PUT',
  async () => {
    const avaliacao: Avaliacao = {
      codigo: `Teste ${Math.random() * 100}`,
      nomeHospital: 'Hospital de teste editado,HTE',
      idsAvaliadores: '',
      data: new Date().toISOString(),
      configuracao: {},
      secoes: [
        {
          topico: 'Secao te teste',
          subtopicos: [
            {
              nome: 'Subtopico de teste',
              status: 'PC',
              pontuacao: 7,
              comentario: 'Comentário de teste',
            },
          ],
        },
      ],
    }

    const response = await apiTest.put(`avaliacao/${idAvaliacaoCriada}/`, avaliacao)

    expect(response.status).toBe(200)
    expect(response.data).toBeTruthy()
    expect(response.data.secoes[0]).toBeTruthy()
    expect(response.data.secoes[0].subtopicos[0]).toBeTruthy()
    expect(response.data.secoes[0].subtopicos[0].status).toBe('PC')
  },
  TIMELIMIT
)

test(
  'Teste de requisição DELETE',
  async () => {
    const response = await apiTest.delete(`avaliacao/${idAvaliacaoCriada}`)

    expect(response.status).toBe(204)
  },
  TIMELIMIT
)
