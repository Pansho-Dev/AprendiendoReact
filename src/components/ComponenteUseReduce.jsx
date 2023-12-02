import React, { useReducer } from "react";

const initialState = { count: 0, step: 1};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + state.step, step: state.step };
    case "decrement":
      return { count: state.count - state.step, step: state.step };

    case "setStep":
      return { count: state.count, step: action.step };

    default:
      throw new Error();
  }
}

export const ComponenteUseReduce = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h3>ComponenteUseReduce</h3>
        Count:{state.count}
        <br></br>
        <button onClick={() => dispatch({ type: "decrement" })}> - </button>
        <button onClick={() => dispatch({ type: "increment" })}> + </button>
      </div>
    </>
  );
};
