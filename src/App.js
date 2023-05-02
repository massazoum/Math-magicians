import { Affiche, Ecran } from './components/ZoumCalculator';
import './components/Calculator.css';

function App() {
  return (
    <div className="main">
      <Ecran value={0} />
      <Affiche />
    </div>

  );
}

export default App;
