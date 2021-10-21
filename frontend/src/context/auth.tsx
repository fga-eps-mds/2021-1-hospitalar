import React , { createContext, useState , useEffect } from "react";
import { api } from "../api"

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(email:string , senha:string): Promise<void>
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({children}) => {
    const [ user , setUser] = useState<object | null>(null)

    async function signIn(email:string , senha:string) {
        try {
            const response = await api.post("authenticate", {
                email,
                password:senha
            })

            setUser(response.data) 
        } catch (err) {
            console.log(err)
        }
    }

    // localStorage.setItem('usuario' , JSON.stringify(user))


    // console.log(user)

    return(
        <AuthContext.Provider value={{ signed: !!user , user , signIn }}>
            {children}
        </AuthContext.Provider>
    )
    
}

export default AuthContext;