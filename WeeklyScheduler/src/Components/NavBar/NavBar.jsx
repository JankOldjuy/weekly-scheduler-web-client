import {NavLink as Link} from 'react-router-dom'
import Cookies from 'universal-cookie'
import './NavBar.css'
import {useContext} from 'react'
import UserInfo from './UserInfo'
import {AuthContext} from '../Contexts'
import { AUTH_COOKIE } from '../../Constants'

export default function NavBar(){

   const auth = useContext(AuthContext)      
           

  return <>
        <div className = 'NavBar'>
           <Link to = 'home'> Home </Link>
           {auth.auth !== undefined ? <Link to = 'weekPlan'> My Plan </Link> : <Link to = 'login'> Login </Link>}
           <UserInfo/>
           
           { (auth.auth !== undefined) && <button
            className = 'LogOutButton'
            onClick = {() => handleLogOut(auth)}
           > Log Out </button>}
         </div>
   </>

}


   function handleLogOut({setAuth}){
      setAuth(undefined)
      const cookies = new Cookies()
      cookies.remove(AUTH_COOKIE)
   }