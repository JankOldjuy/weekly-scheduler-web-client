
import './SettingsSection.css'
function SettingsButton(){



 
  return <button
  onClick = {() => {console.log('You opened Settings')}}
  
  className = 'SettingsButton'> 
    <img  src = 'public\Windows_Settings_app_icon.png' />
  </button>

}


export {SettingsButton}