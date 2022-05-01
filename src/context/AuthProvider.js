import { createContext, useState } from 'react'

const AuthContext= createContext({});


export const AuthProvider = ({ children })=>{
    const [auth, setAuth]= useState({})
   
    const [isLogged, setIsLogged]= useState(localStorage.getItem("token")? true: false)

    const logout=()=>{
        localStorage.removeItem("token")
        setAuth({})
        setIsLogged(false)
      }
   
    return (
        <AuthContext.Provider value={{ auth, isLogged,setAuth, setIsLogged, logout}}>
           {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;