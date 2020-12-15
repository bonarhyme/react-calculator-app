import React, { useReducer } from "react";
import { reducer } from "./Reducer";

const defaultState = {
  result: 0,
  operand: "",
  initialValue: 0,
  userInput: ""
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleDelete = e => {
    e.stopPropagation();
    dispatch({ type: "C" });
  };

  return (
    <section className="calculator">
      <h1>React calculator</h1>
      <div className="container">
        <div className="result" onClick={() => dispatch({ type: "USE" })}>
          {state.result ? state.result : "0"}
        </div>
        <div className="display">
          {state.userInput ? state.userInput : state.initialValue}
        </div>
        <button className="btn" onClick={() => dispatch({ type: "AC" })}>
          Ac
        </button>
        <button className="btn" onClick={handleDelete}>
          C
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "OPERAND", payload: "*" })}
        >
          X
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "OPERAND", payload: "/" })}
        >
          /
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "NUMBER", payload: "7" })}
        >
          7
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "NUMBER", payload: "8" })}
        >
          8
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "NUMBER", payload: "9" })}
        >
          9
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "OPERAND", payload: "+" })}
        >
          +
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "NUMBER", payload: "4" })}
        >
          4
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "NUMBER", payload: "5" })}
        >
          5
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "NUMBER", payload: "6" })}
        >
          6
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "OPERAND", payload: "-" })}
        >
          -
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "NUMBER", payload: "1" })}
        >
          1
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "NUMBER", payload: "2" })}
        >
          2
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "NUMBER", payload: "3" })}
        >
          3
        </button>
        <button
          className="btn zero"
          onClick={() => dispatch({ type: "NUMBER", payload: "0" })}
        >
          0
        </button>
        <button
          className="btn"
          onClick={() => dispatch({ type: "NUMBER", payload: "." })}
        >
          .
        </button>
        <button
          className="btn equal"
          onClick={() => dispatch({ type: "EQUAL_SIGN" })}
        >
          =
        </button>
        <div class="author">
          <p>
            Made By Bonaventure{" "}
            <a href="https://twitter.com/bonarhyme">[bonarhyme]</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
