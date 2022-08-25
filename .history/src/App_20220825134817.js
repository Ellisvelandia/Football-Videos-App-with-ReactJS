import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Content/>
     <Navbar/>
    </div>
  );
}

export default App;
