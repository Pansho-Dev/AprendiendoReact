import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ComponenteSaludar } from './components/ComponenteSaludar'
import { ComponenteUseState } from './components/ComponenteUseState'
import { ComponenteUseEffect } from './components/ComponenteUseEffect'
import { ComponenteUseContext } from './components/ComponenteUseContext'
import { ComponenteUseRef } from './components/ComponenteUseRef'
import { ComponenteUseId } from './components/ComponenteUseId'
import { ComponenteUseCallBack } from './components/ComponenteUseCallback'
import { ComponenteUseMemo } from './components/ComponenteUseMemo'
import { ComponenteUseReduce } from './components/ComponenteUseReduce'
import { useState } from 'react'
import { MiContexto } from './components/MiContexto'
import { MiContextoPrueba} from './components/MiContextoPrueba'

function App() {

  const [text, setText] = useState("")

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    

       <hr/>
      <h1>Componente Saludar</h1>
      <ComponenteSaludar nombre = "Francisco"/>
      <ComponenteUseState/>
      <ComponenteUseEffect/>
      <ComponenteUseContext />
      <ComponenteUseRef/>
      <ComponenteUseId/>
      <ComponenteUseCallBack/>
      <ComponenteUseMemo/>
      <ComponenteUseReduce></ComponenteUseReduce>
      
      <MiContexto.Provider value={{text,setText}}>

        <MiContextoPrueba></MiContextoPrueba>

      </MiContexto.Provider>
      </>
  )
}

export default App
