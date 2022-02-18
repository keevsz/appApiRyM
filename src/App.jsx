import { useState } from "react";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";

const App = () => {

  const [nombrePersonaje, setNombrePersonaje] = useState("")

  return (
    <div>
      <div className="container">
        <h1 className="mt-4 text-white text-center fs-1">Rick y Morty</h1>
        <Formulario setNombrePersonaje={setNombrePersonaje}/>
        <PintarDatos nombrePersonaje={nombrePersonaje}/>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
