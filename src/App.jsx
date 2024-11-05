import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import Employee from './components/Dashboards/Employee'
import Admin from './components/Dashboards/Admin'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
const App = () => {

  useEffect( () => {
    //setLocalStorage()
    getLocalStorage()
    
  },)
  return (
    <div>
      <Login/>
    </div>
  )
}

export default App
