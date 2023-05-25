import { useState } from "react";
import "./App.css";
import DragDropCard from "./components/DragDropCard";
import Navbar from "./components/Navbar";
import SecondView from "./components/SecondView";

function App() {
  /* Aca estamos seteando a la variable Pdf,que la pasaremos por los componentes para poder visualizar,cargar y subir a la api el archivo */
  const [pdf, setPdf] = useState([]);
  pdf.map((data) => console.log(data.base64));
  const handleAddItem = (addItem) => {
    setPdf([...pdf, addItem]);
  };
  return (
    <div class="App">
      <Navbar />
      {/* Si el array de pdf es diferente a 0,por ende tiene contenido,pasa a visualizarse
      Este sistema funciona para visualizar solo un archivo */}
      {pdf.length !== 0 ? (
        <SecondView pdf={pdf} />
      ) : (
        <DragDropCard handleAddItem={handleAddItem} />
      )}
    </div>
  );
}
export default App;
