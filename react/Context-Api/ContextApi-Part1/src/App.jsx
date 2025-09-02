import { useState } from 'react'

import './App.css'
import UserContext from './context/UserContext'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Sign from './components/Sign'
import Signup from './../../practice/practiceproject/src/components/Signup';
import ThemeContext from './context/ThemeContext'
import ThemeContextProvider from './context/ThemeContextProvider'
import Btn from './components/Btn'


function App() {
  

  return (
    <>
    <h1>Welcome</h1>
      <UserContextProvider>
        <Login/>
        <Sign/>
      </UserContextProvider>
      <ThemeContextProvider>
        <Btn/>
      </ThemeContextProvider>
    </>
  )
}

export default App
