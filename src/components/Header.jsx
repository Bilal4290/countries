import React, { useContext, useState } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import { Link } from 'react-router-dom';
import '../App.css'
import { ThemeContext } from '../contexts/ThemeContext.jsx';


const Header = () => {

  const [dark,setDark] = useContext(ThemeContext)

const darkFun = () => {
  setDark(!dark)
  localStorage.setItem('isDark',!dark)
}

  return (
    <>
       <header className= {`max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 shadow-lg sticky top-0 bg-white z-50 ${dark ? 'dark' : ""}`}>
                   
               <div className=' w-full flex justify-between items-center py-8 '>
                       <div>
                             <Link to={'/'} className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>Where in the world?</Link>
                       </div>

                       <button onClick={darkFun} className='flex gap-2 items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl'>
                             <span>{dark ? (<IoSunny />) : (<FaRegMoon />)}</span>
                             <p className=' font-semibold sm:font-bold'>{dark ? "Light Mode" :  "Dark Mode"}</p>
                       </button>
               </div>

        </header>
    </>
  )
}

export default Header