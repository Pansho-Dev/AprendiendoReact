import React, { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

//Componente ThemeProvider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//Custom Hooks
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

//Exportacion del componente ThemeProvider y Custom Hooks
export { ThemeProvider, useTheme };

/* 
        Explicacion

En este ejemplo, estamos construyendo una aplicación 
que permite a los usuarios cambiar entre un tema claro
y uno oscuro. Utilizamos el Context API de React para 
gestionar el estado del tema y proporcionar una función
para cambiarlo.

Primero, creamos un contexto llamado ThemeContext. Luego,
creamos un componente llamado ThemeProvider que utiliza 
ThemeContext.Provider para envolver los componentes hijos.
Este componente almacena el estado del tema y una función para cambiarlo.

Luego, creamos un custom hook llamado useTheme. Este hook utiliza el hook
useContext para acceder al ThemeContext. Si intentamos usar este hook
fuera de un ThemeProvider, lanzará un error para evitar problemas difíciles de rastrear.

Después, en cualquier parte de nuestra aplicación, podemos utilizar el hook useTheme
para acceder al tema actual y a la función toggleTheme sin tener que importar directamente ThemeContext. 

Esto hace que nuestro código sea más limpio, fácil de entender y reutilizable.

En resumen, el uso de custom hooks con la Context API nos permite encapsular la lógica de acceso al 
contexto en un solo lugar, facilitando el mantenimiento y las pruebas del código. Además, ayuda a evitar errores 
al garantizar que el hook solo se utilice dentro del contexto adecuado. Este enfoque es especialmente útil para 
construir aplicaciones más grandes y complejas.


*/
