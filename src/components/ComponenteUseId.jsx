import React, { useId } from 'react'

export const ComponenteUseId = () => {
  
  const passwordHintId = useId();
  const id = useId();
 
  
  return (
    <div>
    
      <h3>Componente Use ID</h3>


      <form>
      <label htmlFor={id + '-firstName'}>First Name:</label>
      <input id={id + '-firstName'} type="text" />
      &nbsp;
      <label htmlFor={id + '-lastName'}>Last Name:</label>
      <input id={id + '-lastName'} type="text" />
    </form>

    <hr></hr>

    </div>
  )
}
