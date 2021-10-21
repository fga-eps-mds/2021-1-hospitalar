import React , { createContext, useState } from "react";
import { api } from "../api"

interface AuthContextData {
    signed: boolean;
    user: object;
    signIn(email:string , senha:string): Promise<void>
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
    const [ usuario , setUser] = useState<object>({})

    async function signIn(email:string , senha:string) {
        const response = await api.post("authenticate", {
            email,
            password:senha
        })
        .then(({ data }) => data)
        .catch((err) => console.log(err))
        setUser(response.user)
    }

    // console.log(user)

    return(
        <AuthContext.Provider value={{ signed: false , user: usuario , signIn }}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContext;