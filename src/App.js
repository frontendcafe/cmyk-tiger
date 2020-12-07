import './App.css';
import CardGrid from './componentes/CardGrid';
import { InputForm } from './componentes/InputForm';
import Navbar from './componentes/Navbar';
import {pelis} from './pelis';

function App() {
  return (
    <div>
      <Navbar />
      <header>    
        <InputForm />
      </header>
      <CardGrid movies={pelis.results} />
    </div>
  );
}

export default App;
