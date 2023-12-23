import React,{createContext} from 'react'

export const MiContexto = createContext(" No existo ");

/*  Para comprender este ejemplo lo que se hace es
lo siguiente, se crea el contexto en un componente
, luego donde vamos donde esta el archivo donde van
todos los componentes en este caso app.jsx.

Exportamos el componente que usa el createContext, 
pero este podra hacer uso del, metodo .Provider👌

EJEMPLO = 

<ComponenteContext.Provider ={ Algun valor o alguna funcion}>

    {hijo o otro componente}

</ComponenteContext.Provider>

En el ejemplo de este caso es como creamos un otro
componente a partir del context y hacer uso del valor
que le damos al momento de importarlo al app.jsx

Ahora ese otro componente llamemoslo MiContextoPrueba,tiene
que tener importaciones como importar el componente 
ComponenteContext, para poder capturar algun valor que le pasemos
en el .Provider. Si no se entendio revisa la siguiente url:

https://www.freecodecamp.org/news/context-api-in-react/



*/
