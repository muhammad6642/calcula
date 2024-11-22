import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(null);
  const [lastOperator, setLastOperator] = useState(null);

  const handleClick = (value) => {
    if (input === "0" && value !== "." && !isNaN(value)) {
      setInput(value);
    } else if (input.includes(".") && value === ".") {
      return; // Prevent multiple decimals
    } else {
      setInput(input + value);
    }
  };

  const handleOperator = (operator) => {
    if (lastOperator) {
      setInput(input.slice(0, -1) + operator); // Overwrite last operator
    } else {
      setInput(input + operator);
    }
    setLastOperator(operator);
  };

  const handleEqual = () => {
    try {
      // Formula logic using eval, though it's risky for production use, we assume safe input
      const evalResult = eval(input);
      setResult(evalResult);
      setInput(evalResult.toString());
      setLastOperator(null);
    } catch (e) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("0");
    setResult(null);
    setLastOperator(null);
  };

  return (
    <div className="calculator">
      <div id="display" className="display">
        {input}
      </div>
      <div className="buttons">
        <button id="clear" onClick={handleClear}>
          C
        </button>
        <button id="seven" onClick={() => handleClick("7")}>
          7
        </button>
        <button id="eight" onClick={() => handleClick("8")}>
          8
        </button>
        <button id="nine" onClick={() => handleClick("9")}>
          9
        </button>
        <button id="divide" onClick={() => handleOperator("/")}>
          /
        </button>

        <button id="four" onClick={() => handleClick("4")}>
          4
        </button>
        <button id="five" onClick={() => handleClick("5")}>
          5
        </button>
        <button id="six" onClick={() => handleClick("6")}>
          6
        </button>
        <button id="multiply" onClick={() => handleOperator("*")}>
          *
        </button>

        <button id="one" onClick={() => handleClick("1")}>
          1
        </button>
        <button id="two" onClick={() => handleClick("2")}>
          2
        </button>
        <button id="three" onClick={() => handleClick("3")}>
          3
        </button>
        <button id="subtract" onClick={() => handleOperator("-")}>
          -
        </button>

        <button id="zero" onClick={() => handleClick("0")}>
          0
        </button>
        <button id="decimal" onClick={() => handleClick(".")}>
          .
        </button>
        <button id="equals" onClick={handleEqual}>
          =
        </button>
        <button id="add" onClick={() => handleOperator("+")}>
          +
        </button>
      </div>
    </div>
  );
};

export default App;
