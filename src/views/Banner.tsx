import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Banner() {

    const {theme, toggleTheme}= useContext(ThemeContext)
   
  return (
    <div data-theme={theme}>
         <div className="flex flex-col justify-center items-center h-60 gap-4">
        <h1 className="text-3xl font-bold">
          Tema actual: {theme === "light" ? "☀️ Claro" : "🌙 Oscuro"}
        </h1>
        <button className="btn btn-primary" onClick={toggleTheme}>
          Cambiar Tema
        </button>
      </div>
    </div>
  )
}
