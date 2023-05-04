import Affiche from './components/ZoumCalculator';
import { Nav, DisplayQuote } from './components/quote';
import './components/Calculator.css';

function App() {
  return (

    <div className="main">
      <Nav />
      <DisplayQuote />
      <Affiche />
    </div>

  );
}
export default App;
