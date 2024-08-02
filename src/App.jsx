import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext.jsx'
import { useState } from 'react'



const App = () => {



  return (
    <ThemeProvider>
        <Header />
        <Outlet />  
    </ThemeProvider>
  )
}

export default App