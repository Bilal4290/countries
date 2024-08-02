import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()



export function ThemeProvider ({children}){
     
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem('isDark')))

    useEffect(()=>{
        if(dark){
            document.body.classList.add('bg-[hsl(207,26%,17%)]')
        }else{
            document.body.classList.remove('bg-[hsl(207,26%,17%)]')
        }

    },[dark])

    return(
        <ThemeContext.Provider value={[dark,setDark]}>
            {children}
        </ThemeContext.Provider>
    )
}

