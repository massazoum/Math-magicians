import './Calculator.css';
import PropTypes from 'prop-types';

export function Affiche() {
  return (
    <div>
      <div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button className="ColorBtn" type="button">/</button>
      </div>
      <div>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button className="ColorBtn" type="button">x</button>
      </div>
      <div>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button className="ColorBtn" type="button">-</button>
      </div>
      <div>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button className="ColorBtn" type="button">+</button>
      </div>
      <div>
        <button className="zero" type="button">0</button>
        <button type="button">.</button>
        <button className="ColorBtn" type="button">=</button>
      </div>

    </div>
  );
}

export function Ecran({ value }) {
  return (
    <div className="affichage">
      {value}
    </div>
  );
}

Ecran.propTypes = {
  value: PropTypes.number.isRequired,
};
