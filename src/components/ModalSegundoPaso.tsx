import { useRef } from "react"

export default function ModalSegundoPaso() {
  const modalRef = useRef<HTMLDialogElement>(null)

  const openModal = () => {
    modalRef.current?.showModal()
  }

  return (
    <div>
      <button className="btn btn-ghost" onClick={openModal}>Ver más</button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">CREAR PROVIDER</h3>
          <div className="modal-action">
            <form method="dialog">
              <div className="pb-5">
                <div>
                  <h4 className="font-semibold pb-2">
                    ¿Qué es un Provider?
                  </h4>
                  <p>
                    Cuando creás un Context con createContext, en realidad React te da dos cosas:</p>
                  <ul>
                    <li>
                      🔹El objeto Context → (ThemeContext en tu caso).
                    </li>
                    <li>
                      🔹Un componente especial Provider → que es como una caja que “reparte” datos a todos los componentes que estén dentro de ella.
                    </li>
                  </ul>
                  <div className="py-2">
                    <p>
                      👉 Esa caja puede contener cualquier dato: un valor, un objeto, una función, etc.
                    </p>
                    <p>
                      👉 Todos los componentes hijos de ese Provider van a poder acceder a esos datos sin necesidad de pasarlos como props.
                    </p>
                    <p className="font-semibold">
                      👉 Para esto es necesario:
                    </p>
                    <ul>
                      <li>
                        🔹Crear el estado theme.
                      </li>
                      <li> 
                        🔹Crear la función toggleTheme.
                      </li>
                      <li> 
                        🔹Pasar esos valores al contexto con value=&#123;&#123; theme, toggleTheme &#125; &#125;
                      </li>
                      <li>
                        🔹 Renderizar &#123; children &#125; para que los hijos sigan apareciendo.
                      </li>
                    </ul>
                  </div>

                </div>
<p>Ejemplo:</p>
                <pre className="bg-slate-200 p-2 rounded text-sm font-mono whitespace-pre-wrap">
                  {`export function ThemeProvider({children}:{children:ReactNode}){
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme =()=>{
        setTheme((prev)=> prev==='light'?'dark': 'light')
    }
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div data-theme={theme}>
{children}
            </div>
        </ThemeContext.Provider>
    )
}
`}
                </pre>
              </div>
<div className="flex justify-end"> 
                <button className="btn btn-primary">Cerrar</button>

</div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}
