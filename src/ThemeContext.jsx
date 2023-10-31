import { createContext, useContext, useState } from "react";

const ThemeContext = createContext()



export  function useTheme() {
  return useContext(ThemeContext)
}

export function ThemeProvider({children}){

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = () => {

        setIsDarkTheme((prevTheme) => !prevTheme)
    }

    return (

        <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


