import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import DragDropCard from './components/DragDropCard'
import SecondView from './components/SecondView'

function App() {
  const [pdf, setPdf] = useState([]);
  const [aux, setAux] = useState();
  pdf.map(data => console.log(data.base64))
  const handleAddItem = addItem => {
    setPdf([...pdf, addItem]);
};
console.log("pdf",pdf)
  return (
    <div class="App">
      <Header/>
      {pdf.length!==0?<SecondView  pdf={pdf} setPdf={setPdf}/>:<DragDropCard handleAddItem={handleAddItem}/>}
      
      
    </div>
  );
}
export default App;