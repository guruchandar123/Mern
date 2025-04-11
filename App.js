import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <div className="card">
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <div className="button-container">
          <button className="circle-button" onClick={increment}>+</button>
          <button className="circle-button" onClick={decrement}>−</button>
          <button className="circle-button" onClick={reset}>⟲</button>
        </div>
      </div>
    </div>
  );
}

export default App;
