import {useContext} from 'react'
import {AuthContext} from '../Contexts'


export default function SettingsView({setClicked}){

  const auth = useContext(AuthContext)




  return  <div className = 'SettingsBackCover'>
            <div className = 'SettingsView'> 
              <button className = 'ExitButton' onClick = {() => {
                setClicked(false)
                document.body.classList.add("overflow-hidden")
                }} >x</button>
              <h4> Settings </h4>
              <ol className = 'Options'> 
                <li> <label> Dark Theme? </label> <input type = 'checkbox'/> </li>
                <li> Option 2</li>
                <li> Option 3</li>
                <li> Option 4</li>
              </ol>
            
            
            </div>
        </div>
}