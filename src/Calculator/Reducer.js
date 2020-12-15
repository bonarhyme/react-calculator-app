import React from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "NUMBER":
      if (state.userInput === "") {
        return {
          ...state,
          userInput: action.payload
        };
      } else if (state.userInput === "" && action.payload === ".") {
        return {
          ...state,
          userInput: 0 + action.payload
        };
      } else {
        if (action.payload === "." && state.userInput.includes(".")) {
          return state;
        } else {
          return {
            ...state,
            userInput: state.userInput + action.payload
          };
        }
      }
    case "OPERAND":
      if (!state.userInput) {
        return {
          ...state,
          operand: action.payload,
          initialValue: state.userInput,
          userInput: 0 + action.payload
        };
      }
      if (state.userInput) {
        return {
          ...state,
          operand: action.payload,
          userInput: state.userInput + action.payload
        };
      }
      if (state.userInput.slice(-1) === "+") {
        consoloe.log("Another plus sign");
      }

    case "EQUAL_SIGN":
      if (
        state.userInput.endsWith("*") ||
        state.userInput.endsWith("-") ||
        state.userInput.endsWith("/") ||
        state.userInput.endsWith("+") ||
        state.userInput.endsWith(".")
      ) {
        return state;
      }
      if (state.operand && state.userInput) {
        return {
          ...state,
          result: eval(state.userInput),
          userInput: ""
        };
      }

    case "USE":
      if (state.result) {
        return {
          userInput: state.result
        };
      }

    case "C":
      if (state.userInput.length >= 1) {
        return {
          ...state,
          userInput: state.userInput.slice(0, -1)
        };
      }

    case "AC":
      return {
        result: 0,
        operand: "",
        initialValue: 0,
        userInput: ""
      };

    default:
      return state;
  }
};
