import { createContext, useState } from "react"

const AuthContext = createContext()
const AccountContext = createContext()



function WeeklySchedulerContextProvider({children}){

  const [auth, setAuth] = useState()
  const [account, setAccount] = useState()

  return  <AuthContext.Provider 
  value = {
    {auth: auth, setAuth: setAuth, 
    account: account, setAccount: setAccount}} > 
    {children}
  </AuthContext.Provider>


}



export {AuthContext, AccountContext, WeeklySchedulerContextProvider}


