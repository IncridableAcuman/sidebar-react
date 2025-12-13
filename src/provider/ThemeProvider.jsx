import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },[theme]);

    const toggleTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light');
    }

  return (
    <>
    <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    </>
  )
}

export const UseTheme = () =>{
 const context = useContext(ThemeContext);
 return context;
}