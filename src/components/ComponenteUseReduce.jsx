import React, { useReducer } from "react";


// Inicializando valores
const initialState = { count: 0, step: 1};

// Tomar en consideracion que la funcion reducer es creada con el hook dentro del componente, la definicion de action es siguiente: 
/* action: La acción realizada por el usuario. Puede ser un valor de cualquier tipo. Por convención,
   una acción suele ser un objeto con una propiedad type que lo identifica y, opcionalmente, otras propiedades con información adicional. */
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
  
  // El dispatch se puede entender que sera el metodo o la funcion que despachara el valor del html ( del onClick),a la funcion reducer, pasandole
  // el action.type, ejecutando el switch.
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h3>ComponenteUseReduce</h3>
        Count:{state.count}
        <br></br>
        <button onClick={() => dispatch({ type: "decrement" })}> - </button>
        <button onClick={() => dispatch({ type: "increment" })}> + </button>
        <hr></hr>
        </div>
    </>
  );
};
