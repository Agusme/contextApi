import { useRef } from "react"

export default function ModalCuartoPaso() {
    const modalRef = useRef<HTMLDialogElement>(null)

    const openModal = () => {
        modalRef.current?.showModal()
    }

    return (
        <div>
            <button onClick={openModal} className="btn btn-ghost">
                Ver más
            </button>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Para consumir el contexto desde cualquier componente</h3>
                    <form method="dialog">
                        <div className="mb-2">
                            <p className="my-2">Se necesita usar <strong>useContext</strong> </p>
                
                <p className="bg-slate-200 p-2 rounded text-sm font-mono whitespace-pre-wrap">
{`import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext"; 

const { theme, toggleTheme } = useContext(ThemeContext);
`}
        </p>
<p className="my-2">Ejemplo de uso:</p>
  <p className="bg-slate-200 p-2 rounded text-sm font-mono whitespace-pre-wrap">
{` <h1 className="text-3xl font-bold">
     Tema actual: {theme === "light" ? "☀️ Claro" : "🌙 Oscuro"}
 </h1>
<button className="btn btn-primary" onClick={toggleTheme}>
          Cambiar Tema
</button>
`}
        </p>
        </div>
                        <div className="flex justify-end my-2">
                            <button className="btn btn-primary">Cerrar</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}
