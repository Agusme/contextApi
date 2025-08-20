import ModalCuartoPaso from "../components/ModalCuartoPaso";
import ModalPrimerPaso from "../components/ModalPrimerPaso";
import ModalSegundoPaso from "../components/ModalSegundoPaso";
import ModalTercerPaso from "../components/ModalTercerPaso";

export default function Accordion() {
  return (
    <div>
        <div className="join join-vertical bg-base-100 w-full">
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-semibold">
 Context API en React
</div>
    <div className="collapse-content">
         <ul className="list-disc pl-6 space-y-2 list-inside marker:text-blue-800">
          <li>
          <span className="text-blue-800 font-semibold">Es</span> una herramienta nativa de React (no hay que instalar nada).
          </li>
          <li>
            <span className="text-blue-800 font-semibold"> Sirve</span> para compartir estado (datos o funciones) entre componentes,
            sin tener que pasarlos como props manualmente por cada nivel
          </li>
          <li>
            <span className="font-semibold text-blue-800">Funciona</span> con dos piezas clave:{" "}
            <ol className="list-decimal pl-6 space-y-1">
              <li>Provider → es el que “provee” el estado.</li>
              <li>
                Consumer (useContext) → es el que “consume” ese estado desde
                cualquier parte de la app.
              </li>
            </ol>
          </li>
        </ul>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
       <div className="collapse-title text-xl font-semibold">
 Flujo básico de uso</div>
    <div className="collapse-content">
          <ol className="list-decimal pl-6 space-y-2 list-inside marker:text-blue-800">
                  <div className="flex gap-2 items-center">
                    <li>Crear el <span className="text-blue-800 font-semibold" >Contexto</span> → createContext()</li>
                    <ModalPrimerPaso />
                  </div>
                  <div className="flex gap-2 items-center">
                    <li>  Crear un <span  className="text-blue-800 font-semibold"> Provider</span> que guarde el estado con useState o lo que
                      necesites.</li>
                    <ModalSegundoPaso />
                  </div>
                  <div className="flex gap-2 items-center">
                    <li><span className="text-blue-800 font-semibold" >Envolver</span> la app (o parte de la app) con ese Provider.</li>
                    <ModalTercerPaso />
                  </div>
                  <div className="flex gap-2 items-center">
                    <li>            <span className="text-blue-800 font-semibold" >Consumir</span> el contexto en cualquier componente usando useContext.
                    </li>
                    <ModalCuartoPaso />
                  </div>
                </ol>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-semibold">
      Ejemplo mental simple
</div>
    <div className="collapse-content text-sm">
         <p className="mb-2">Imaginá que tenés un “tema” (claro u oscuro):</p>
        <ul className="list-disc pl-6 space-y-2 list-inside marker:text-blue-800">
          <li>El Provider guarda si el tema está en "light" o "dark".</li>
          <li>
            Cualquier componente de la app puede preguntar: “che, ¿qué tema está
            activo?” o decir “cambiá el tema”.
          </li>
          <li>
            Así evitamos estar pasando theme y setTheme como props por 5
            componentes de diferencia.
          </li>
        </ul>
   
    </div>
  </div>
</div>
    </div>
  )
}
