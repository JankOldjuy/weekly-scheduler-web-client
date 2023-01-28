import {Route, Routes, Navigate, BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import LoginPage from './LoginPage/LoginPage'
import NavBar from './NavBar/NavBar'
import {AuthContext} from './Contexts'
import {useState} from 'react'
import WeekPlan from './WeekPlan/WeekPlan'
import { WeeklySchedulerContextProvider } from './Contexts'
import { SettingsButton } from './SettingsSection/Settings'

function App() {

  
  return (

    <Router>
        <WeeklySchedulerContextProvider>
        <div className="App">
        
        <NavBar/>
        <SettingsButton/> 
        
        <Routes>
          <Route path = '/weekPlan' element ={<WeekPlan/>}/>
          <Route path = '/home' element = {<div> Home </div>}/>
          <Route path = '/login' element = {<LoginPage/>}/>
          <Route path = '/*' element = {<Navigate to = "/home"/>}/>
        </Routes>
    
        </div>
        
        </WeeklySchedulerContextProvider>
    </Router>
    
  )
}

export default App
