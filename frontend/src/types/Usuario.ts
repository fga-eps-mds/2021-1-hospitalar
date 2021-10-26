export type Usuario = {
  id: number
  email: string
  nome: string
  funcao: string
  organizacao: string
  admin: boolean
}

export type UserResponse = {
  user: Usuario
  token: string
}
