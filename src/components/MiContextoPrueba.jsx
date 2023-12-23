import React, { useContext } from 'react'
import { MiContexto } from './MiContexto'


export const MiContextoPrueba = () => {
  
    const {text, setText} = useContext(MiContexto)
  
    return (
    <div>
    
        <h1>{text}</h1>
        <button onClick={()=> setText('Contexto API')}>Clickeame</button>

        <hr></hr>
    </div>
  )
}
