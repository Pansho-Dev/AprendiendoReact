import React, { useEffect, useRef, useState } from 'react'


export const ComponenteUseRef = () => {
  const inputEl = useRef(null)
  const onButtonClick= () => {
    // `current` apunta al campo de texto montado en el DOM
    console.log(inputEl.current.value)
}

    const intervalRef = useRef()
    const [timer, setTimer] = useState(0)    

    useEffect(() =>{

      intervalRef.current = setInterval(()=>{
        setTimer((timer)=> timer + 1)
      },1000)

      return()=>{
        clearInterval(intervalRef.current)
      }

    },[])

    return (
    <div>
    
    <h3> UseRef </h3>
    <input ref={inputEl} type="text" />
    <button onClick={onButtonClick}>Buscar</button>
    <br></br>

    <h4>Ejemplo Numero 2</h4>
    <p>Contador {timer}</p>
    <button onClick={()=> clearInterval(intervalRef.current)}>Stop Contador</button>
    <hr/>

    </div>
  )
}
