import { useRef } from "react";

export default function ModalPrimerPaso() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };
  return (
    <div>
      <button className="btn btn-ghost" onClick={openModal}>
        Ver más
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              <div>
          <h3 className="font-bold text-lg">Ejemplo de CREAR CONTEXTO</h3>
                <p className="py-4">
                  Aca se define el <strong>contexto</strong> y los
                  <strong> types</strong>:
                </p>
                <pre className="bg-slate-200 p-2 rounded text-sm font-mono whitespace-pre-wrap">
                  {`import { createContext } from "react";
 export type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});`}
                </pre>
              </div>
              <div className="flex justify-end my-2">
                <button className="btn btn-primary">Cerrar</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
