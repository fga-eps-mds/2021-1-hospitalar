import React, { createContext, useState } from 'react'
import { UserResponse, Usuario } from '../types/Usuario'

import { authApi } from '../api'

interface AuthContextData {
  signed: boolean
  user: Usuario | null
  token: string | null
  logIn(email: string, senha: string): void
  logout(): void
}

type Props = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: Props): React.ReactElement {
  const [user, setUser] = useState<Usuario | null>(() => {
    const userString = localStorage.getItem('user')

    if (userString) {
      return JSON.parse(userString)
    }

    return null
  })

  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))

  const logIn = async (email: string, senha: string) => {
    const response = await authApi
      .post<UserResponse>('login/', {
        email,
        password: senha,
      })
      .then(({ data, status }) => {
        const obj = { data, status }
        return obj
      })
      .catch((error) => {
        alert(`Erro ao fazer login, email ou senha incorretos... \nLog: ${error}`)
      })

    if (response?.status === 200) {
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('token', response.data.token)

      setUser(() => {
        const userString = localStorage.getItem('user')

        if (userString) {
          return JSON.parse(userString)
        }

        return null
      })

      setToken(localStorage.getItem('token'))
    }
  }

  const logout = async () => {
    const ResponseStatus = await authApi
      .post(
        'logout/',
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then(({ status }) => status)
      .catch((error) => `Erro ao fazer logout... \nLog: ${error}`)

    if (ResponseStatus === 204) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      setUser(null)
      setToken(null)
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, token, logIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
