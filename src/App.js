import React, { useState } from "react";
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="App">
      <div className="Count">{counter}</div>
      <div>
        <button className="btn" onClick={handleClick1}>
          +
        </button>
        <button className="btn" onClick={handleClick2}
         disabled={counter === 0}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
