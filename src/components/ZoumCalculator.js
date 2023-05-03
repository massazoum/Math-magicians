import './Calculator.css';
import React, { useState } from 'react';

export default function Affiche() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') {
      setDisplay('');
    } else if (value === '+/-') {
      setDisplay((prev) => prev * -1);
    } else if (value === '%') {
      setDisplay((prev) => prev / 100);
    } else if (value === '=') {
      const result = eval(display);
      setDisplay(result);
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  return (
    <div>
      <div className="affichage">{display}</div>
      <div>
        <button type="button" onClick={() => handleClick('AC')}>
          AC
        </button>
        <button type="button" onClick={() => handleClick('+/-')}>
          +/-
        </button>
        <button type="button" onClick={() => handleClick('%')}>
          %
        </button>
        <button
          className="ColorBtn"
          type="button"
          onClick={() => handleClick('/')}
        >
          ÷
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleClick('7')}>
          7
        </button>
        <button type="button" onClick={() => handleClick('8')}>
          8
        </button>
        <button type="button" onClick={() => handleClick('9')}>
          9
        </button>
        <button
          className="ColorBtn"
          type="button"
          onClick={() => handleClick('*')}
        >
          x
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleClick('4')}>
          4
        </button>
        <button type="button" onClick={() => handleClick('5')}>
          5
        </button>
        <button type="button" onClick={() => handleClick('6')}>
          6
        </button>
        <button
          className="ColorBtn"
          type="button"
          onClick={() => handleClick('-')}
        >
          -
        </button>
      </div>
      <div>
        <button type="button" onClick={() => handleClick('1')}>
          1
        </button>
        <button type="button" onClick={() => handleClick('2')}>
          2
        </button>
        <button type="button" onClick={() => handleClick('3')}>
          3
        </button>
        <button
          className="ColorBtn"
          type="button"
          onClick={() => handleClick('+')}
        >
          +
        </button>
      </div>
      <div>
        <button className="zero" type="button" onClick={() => handleClick('0')}>
          0
        </button>
        <button type="button" onClick={() => handleClick('.')}>
          .
        </button>
        <button
          className="ColorBtn"
          type="button"
          onClick={() => handleClick('=')}
        >
          =
        </button>
      </div>
    </div>
  );
}
