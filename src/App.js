import "./styles.css";
import React, { useState, useEffect } from "react";

const Display = ({ count }) => {
  return (
    <div>
      <div>Count {count}</div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  const handledecrement = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    // setCount(count + 1);
  };
  const handleincrement = () => {
    setCount((count) => count - 1);
    setCount((count) => count - 1);
    setCount((count) => count - 1);
  };

  return (
    <div>
      <div>Counter App</div>
      <button onClick={handleincrement}>Increement</button>
      <button onClick={handledecrement}>Decreement</button>
      <Display count={count} />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Counter />
    </div>
  );
}
