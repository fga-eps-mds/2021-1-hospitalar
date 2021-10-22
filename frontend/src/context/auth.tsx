import React, { createContext, useState, useEffect } from 'react'
import { authApi } from '../api'
import { UserResponse, Usuario } from '../types/Usuario'

interface AuthContextData {
  signed: boolean
  user: Usuario | null
  token: string | ''
  signIn(email: string, senha: string): Promise<void>
  logout(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Usuario | null>(null)
  const [token, setToken] = useState<string>('')
  async function signIn(email: string, senha: string) {
    try {
      const response = await authApi.post<UserResponse>('login/', {
        email,
        password: senha,
      })

      setUser(response.data.user)
      setToken(response.data.token)
    } catch (err) {
      console.log(err)
    }
  }

  function logout() {
    setUser(null)
  }

  useEffect(() => {
    logout()
  }, [user])

  // console.log(user)

  return (
    <AuthContext.Provider value={{ signed: !!user, user, token, signIn, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
