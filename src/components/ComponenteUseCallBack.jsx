import React, { useCallback, useState } from 'react'


const Button = React.memo(({ onClick, children }) => {
     console.log('Button rendered');
     return <button onClick={onClick}>{children}</button>;
    });
    


export const ComponenteUseCallBack = () => {
  
    const [count, setCount] = useState(0)

    const increment = useCallback( () =>{            
        // Funcion que queremos que se ejecute

        setCount(count + 1)

    },[count])
  
  
    return (
    <div>
    
    <h3>Componente UseCallBack</h3>
    <p> Has clickeado {count} veces</p>
    <Button onClick={increment}>Clickeame</Button>
    <br></br>
    <hr></hr>    

    
    

    </div>
  )
}
