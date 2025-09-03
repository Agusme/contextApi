
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
    <div className="flex items-center mx-8 md:mx-32 mb-10 justify-around gap-5 bg-blue-100 w-1/3 rounded-lg p-2">
      <h2 className="text-xl font-semibold">Más ejemplos</h2>
   <a href="https://contextapi-agusme.netlify.app/" className="btn btn-primary" target="_blank"> Ver</a>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
