import React, { useState } from 'react'

export const ComponenteSaludar = (props) => {
  
  const [count, setCount] = useState(0)
 


  return (
    <div>

        <h2> Hola que tal {props.nombre}</h2>
        <hr></hr>

        <h3>Testeos</h3>

        <h4><b>Use State</b></h4>
        <p>Me has saludado {count}</p>
        <button onClick={()=>setCount(count + 1)}>Saludame</button>
        <hr></hr>
        
    
    </div>
  )
}
