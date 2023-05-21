import './App.css';
import Header from './components/Header';
import DragDropCard from './components/DragDropCard';
import PdfViewer from './components/PdfViewer';
import EmailSection from './components/EmailSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <EmailSection/>
    </div>
  );
}
export default App;