import { Routes, Route, Link } from 'react-router-dom';
import React, { Component } from 'react';
import Affiche from './components/ZoumCalculator';
import DisplayQuote from './components/quote';
import './components/Calculator.css';
import Home from './components/HomePage';

function App() {
  return (

    <div className="main">
      <header>
        <div>Math magicians</div>
        <div className="itemNav">
          <div>
            {' '}
            <Link to="/">
              Home
            </Link>
          </div>
          <div>
            {' '}
            <Link to="/ZoumCalculator">
              Calculator
            </Link>
          </div>
          <div>
            {' '}
            <Link to="/quote">
              Quote
            </Link>
            {' '}

          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<DisplayQuote />} />
        <Route path="/ZoumCalculator" element={<Affiche />} />
      </Routes>

    </div>

  );
}
export default App;
