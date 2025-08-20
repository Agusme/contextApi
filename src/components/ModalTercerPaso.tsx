import { useRef } from "react";

export default function ModalTercerPaso() {
    const modalRef = useRef<HTMLDialogElement>(null);

    const openModal = () => {
        modalRef.current?.showModal();
    };
    return (
        <div>
            <button onClick={openModal} className="btn btn-ghost">
                Ver más
            </button>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Ejemplo de ENVOLVER CON PROVIDER</h3>
                    <div className="modal-action">
                        <form method="dialog" className="w-full">
               
  <pre className="bg-slate-200 p-2 rounded text-sm font-mono w-full">
     {
     `<ThemeProvider>
     <App />
   </ThemeProvider>
    `}
  </pre>
  
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
