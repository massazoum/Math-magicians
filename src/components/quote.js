// import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
// import React from 'react';
import './quote.css';
// import Affiche from './ZoumCalculator';

const category = 'happiness';
const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

export default function DisplayQuote() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const getQuote = async () => {
      setLoading(true);
      setError(null);
      setResults(null);

      try {
        const res = await fetch(url, {
          headers: {
            'X-Api-Key': 'DhMsRgTrcM7oaH9gZgrECA==lE7WruG8Yf68gBt3',
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setResults(data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getQuote();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    const styles = { loading: { fontSize: 'large' } };
    return (
      <div style={styles} className="loading">
        Error:
        {error.message}
      </div>
    );
  }

  const styles = {
    quote: {
      fontSize: 'large',
      marginTop: '30vh',
      width: '100%',
      height: 'auto',
      boxShadow: '10px 10px 5px 0 #000000bf',
      WebkitBoxShadow: '10px 10px 5px 0 #000000bf',
      MozBoxShadow: '10px 10px 5px 0 #000000bf',
    },
  };

  return (
    <div className="quote" style={styles}>
      <div>
        <span>Author: </span>
        {results.author}
      </div>
      <div>
        <span>Category: </span>
        {results.category}
      </div>
      <div>
        <span>Quote: </span>
        {results.quote}
      </div>
    </div>
  );
}
