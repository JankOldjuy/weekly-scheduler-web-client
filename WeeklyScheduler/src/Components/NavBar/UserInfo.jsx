import {useContext, useEffect} from 'react'
import {AuthContext} from '../Contexts'
import Cookies from 'universal-cookie'
import axios from 'axios'

export default function UserInfo(){

  const auth = useContext(AuthContext)
  useFetch(auth)
   

  return <div>

  </div>
}




function useFetch({auth, setAuth}){


  useEffect(() => {

    console.log("use effect on play")
    if(auth !== undefined){
      return;
    }
      
    const cookies = new Cookies()
    console.log('Cookie name: ', import.meta.env.VITE_AUTH_COOKIE_NAME)
    console.log("cookie: ", cookies.get(import.meta.env.VITE_AUTH_COOKIE_NAME))



    if(cookies.get(import.meta.env.VITE_AUTH_COOKIE_NAME) !== undefined){
      
      //TODO: make request for account details
      

      /* cookies.remove(import.meta.env.VITE_AUTH_COOKIE_NAME)
      axios.get("localhost:8080/user/accountDetails", {
        headers: {
          Authorization: import.meta.env.VITE_AUTH_COOKIE_NAME
        }
      })
    .then(res => console.log(res.data)) */   
    }

    else{
      
      axios.post("//localhost:8080/auth/login",{
        userName: "ceq",
        password: "ceq"
      })
      .then(res => {

        console.log('request is made', res.data)
        cookies.set(import.meta.env.VITE_AUTH_COOKIE_NAME, res.data, {
          sameSite: 'lax'
        })
        setAuth({authenticated: true})
      })
      .catch(e => {console.log(e)})


      
    }
  
    
    return () => {
      cookies.remove(import.meta.env.VITE_AUTH_COOKIE_NAME)
    }
  }, [])
}