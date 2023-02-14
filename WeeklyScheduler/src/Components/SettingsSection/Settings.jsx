
import { useState } from 'react'
import './SettingsSection.css'
import SettingsView from './SettingsView'
function SettingsButton(){


  const [clicked, setClicked] = useState(false)  
 
  return <>
  
  {clicked && <SettingsView setClicked = {setClicked}/>}
  { !clicked && <button 
  onClick = {() => {
    setClicked(true)
    document.body.classList.remove("overflow-hidden")
  }}
  
  className = 'SettingsButton'> 
    <img  src = 'public\Windows_Settings_app_icon.png' />
  </button>}
  </>
  

}


export {SettingsButton}