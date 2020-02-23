import React, { Component, useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { Form } from "./Form.jsx";

const App = () => {
  const [count, setCount] = useState(0);
    const [habit, habitChosen] = useState("");
    


  const increment = () => {
    setCount(count => {
      if (count >= 10) return count;
      return (count += 1);
    });
  };

  const reset = () => {
    setCount(count => {
      return (count = 0);
    });
  };

  useEffect(() => {
    document.title = `Counter: ${count}`;
  }, []);

  return (
    <div className="Counter">
      <h1>TEAM JIGGLY|PUFFFSS</h1>
      <h2>{count}</h2>
      <button onClick={increment}>INCREMENT</button>
      <a>
        <button onClick={reset}>RESET</button>
      </a>
    </div>
  );
};

export default hot(module)(App);
