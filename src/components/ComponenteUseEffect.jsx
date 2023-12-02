import React, { useEffect, useState } from 'react'

export const ComponenteUseEffect = () => {
    
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log('useEffect')
    },[count])
  
    return (
    <div>
        <hr></hr>
        <h3>Use Effect</h3>
        <p>Has clickeado {count} veces y revisa la consola del navegador</p>
        <button onClick={()=>setCount(count + 1)}> Clickeame</button>
        <hr/>
    </div>
  )
}
