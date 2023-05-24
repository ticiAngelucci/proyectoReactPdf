import { useState } from "react";
import "./App.css";
import DragDropCard from "./components/DragDropCard";
import Navbar from "./components/Navbar";
import SecondView from "./components/SecondView";

function App() {
  const [pdf, setPdf] = useState([]);
  pdf.map((data) => console.log(data.base64));
  const handleAddItem = (addItem) => {
    setPdf([...pdf, addItem]);
  };
  return (
    <div class="App">
      <Navbar />
      {pdf.length !== 0 ? (
        <SecondView pdf={pdf} />
      ) : (
        <DragDropCard handleAddItem={handleAddItem} />
      )}
    </div>
  );
}
export default App;
