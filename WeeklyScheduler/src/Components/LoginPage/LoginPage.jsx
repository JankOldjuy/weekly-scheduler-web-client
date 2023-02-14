import {AuthContext} from "../Contexts"
import {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function LoginPage(){

  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    if(auth.auth !== undefined){
      navigate('/home')
    }
  })


  return <>
      <div>
        <form onSubmit={(e) => {
          e.preventDefault()
          auth.setAuth('false')}}>
          <div> {auth === undefined} </div>
          <label>Username: </label> 
          <input type = "text" placeholder="Username"/>
          <label> Password </label>
          <input type = "password" placeholder = "password"/>
          <input type = "submit" value = "Submit"/> 
                 
        </form>
      </div>
  
  </>
}