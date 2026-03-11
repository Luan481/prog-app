import { useState } from 'react'

import './App.css'
import Evento from './components/Evento';

function App() {
  const [inputNome, setInputNome] = useState('')
  
  function cadastrar() {
    console.log(`Cadastrando: ${inputNome}`)
  }

  return (
    <>
      <h1>Inputs controlados</h1>
      Nome <input type="text"
      value={inputNome}
      onChange={(e) => setInputNome(e.target.value)}      
      />     
      {/* <p>Nome digitado: {inputNome}</p> */}
    <button onClick={cadastrar}>cadastrar</button>

    <Evento />
    </>
  )
}

export default App
