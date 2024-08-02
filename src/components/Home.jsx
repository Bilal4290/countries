import React, { useContext, useState } from 'react'
import SearchMenu from './SearchMenu'
import CountryData from './CountryData'
import FilterMenu from './FilterMenu'
import '../App.css'
import { ThemeContext } from '../contexts/ThemeContext.jsx'

const Home = () => {
  
  const [query, setQuery] = useState("")
   const [dark] = useContext(ThemeContext)
   
  return (
    <>
     <main className={dark ? 'dark' : ''}>
           <div className= 'max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-20 pt-10 sm:pt-12 lg:pt-20 flex flex-col gap-6 sm:gap-0 sm:flex-row items-center justify-between' >
                <SearchMenu setQuery={setQuery} />
                <FilterMenu setQuery={setQuery} />
           </div>
          
           <CountryData query={query} />
      </main>
    </>
  )
}

export default Home