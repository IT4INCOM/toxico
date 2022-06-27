import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter((index) => index + 1);
  };
  const decrement = () => {
    setCounter((index) => index - 1);
  };
  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;
