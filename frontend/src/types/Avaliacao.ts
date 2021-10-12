export type Subtopico = {
  id?: number
  nome: string
  status: string
  comentario: string
  pontuacao: number
}

export type Secao = {
  id?: number
  topico: string
  subtopicos: Subtopico[]
}

export type Configuracao = {
  id?: number
  NV1?: number
  NV2?: number
  NV3?: number
}

export type Avaliacao = {
  id?: number
  codigo: string
  nomeHospital: string
  idsAvaliadores: string
  data?: string
  configuracao: Configuracao
  secoes: Secao[]
}
