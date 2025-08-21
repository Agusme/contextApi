
import Banner from "./views/Banner";
import Accordion from "./views/Accordion";
import Footer from "./views/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="mx-auto max-w-6xl pb-5 px-5 flex-grow  p-6 ">
     <Banner/>
   <div className="mb-6">
      <h1 className="text-4xl font-semibold mb-2 text-gray-700 ">CONTEXT API</h1>
     <p className="text-gray-600">Aprende de manera práctica qué es Context API, cómo se usa y mira ejemplos paso a paso.
</p>
   </div>
        <Accordion/>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
