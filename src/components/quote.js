import React, { useEffect, useState } from 'react';
import './quote.css';

export function Nav() {
  return (
    <header>
      <div>Math magicians</div>
      <div className="itemNav">
        <div><button className="btnNav" type="button">Calculator</button></div>
        <div><button className="btnNav" type="button">Quote</button></div>
      </div>
    </header>
  );
}

const category = 'happiness';
const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

export function DisplayQuote() {
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
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div className="quote">
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
