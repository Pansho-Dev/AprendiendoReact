import React, { createContext, useContext,  } from 'react'
const ThemeContext = createContext('light')


export const ComponenteUseContext = () => {
    
    const theme = useContext(ThemeContext)
    
    return (
    <div>
        
        <h3>Use Context</h3>
        <button theme={theme}>Mi estilo es por mi contexto</button>
        <p>El ejemplo no esta funcionando... Se modificara <b>AQUI</b></p>
        <hr></hr>
    </div>
  )
}

// QUEDA AL PENDIENTE 