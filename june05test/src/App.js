
import './App.css';
import { CardsContainer } from './Components/CardsContainer/CardsContainer';
import { Header } from './Utils/components/Header/Header';


function App() {
  return (
    <div style={{overflow:"scroll",position:"relative"}} className="App bg-white shadow w-screen h-screen">
      <Header/>
      <CardsContainer/>
    
    </div>
  );
}

export default App;
