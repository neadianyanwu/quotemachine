import { useEffect, useState, useRef } from 'react';
import React  from 'react';
import './App.css';

const App = () => {

const [quotes, setQuotes] = useState("");

   const textRef = useRef();

  let colors =["#bca17d", "#131313", "#444547", "#dcdbe0", "#fff"];
  
  const getQuote = () => {
  fetch("https://type.fit/api/quotes").then((res) => res.json()).then((data) => {
    let randomNum = Math.floor(Math.random() * data.length);
    setQuotes(data[randomNum]);
  });
};

  useEffect(() => {
    getQuote();
  }, [])

  useEffect(() => {
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)]
  }, [quotes]);

  return (
    <div className="App">
     <div className="quote">
      <p ref={textRef}>{quotes.text}</p>
      <br/>
      <p>Author: {quotes.author}</p>
      <br/>

      <div className="btn-container">
        <button className="btn" onClick={getQuote}>
          Get quote
        </button>
        <a 
        href="{`https://twitter.com/intent/tweet?text=${quotes.text}`}" target="_blank" rel="noopener noreferrer" 
        className="btn">Tweet</a>
      </div>
     </div>
    </div>
  );
}

export default App;
