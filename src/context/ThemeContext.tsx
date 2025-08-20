/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from "react";

export type Theme= "light"| "dark";

export type ThemeContextType={
    theme: Theme;
    toggleTheme: ()=> void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme:'light',
    toggleTheme:()=>{        
    }
})

/* Provider : El que contiene los datos*/
export function ThemeProvider({children}:{children:ReactNode}){
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme =()=>{
        setTheme((prev)=> prev==='light'?'dark': 'light')
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div>
{children}
            </div>
        </ThemeContext.Provider>
    )
}
