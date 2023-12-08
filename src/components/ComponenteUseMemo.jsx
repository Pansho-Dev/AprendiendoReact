import React, { useMemo } from 'react'




export const ComponenteUseMemo = ({list}) => {
        
    // Creando una lista para inicializar los datos 
    list = [3,9,1,8,2]

    // Ocupando use memo
    const sortedList = useMemo(() => {
         
        // Crear una copia de la lista
         const sorted = [...list];

        // Ocupar metodo de array .Sort, para ordenar 
         sorted.sort();

        // Regresamos el sorted ordenado y le colocamos la dependencia que hara que se ejecute el use memo
         return sorted;
         }, [list]);
  
  
        // Luego en el el HTML lo que hacemos es
         return (
            <div>
             {sortedList.map(item => (
             <div key={item}>{item}</div>
             ))}
             <hr></hr>
             </div>
             
             
             );
                


}
