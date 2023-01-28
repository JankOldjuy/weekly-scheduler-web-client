import {AuthContext} from "../Contexts"
import {useContext, useEffect} from 'react'

export default function LoginPage(){

  const auth = useContext(AuthContext)

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