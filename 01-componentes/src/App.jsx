import './App.css'
import DiaDaSemana from './components/DiaDaSemana';
import Paridade from './components/Paridade';
import Notas from './components/Notas';

function App() {
  return (
    <>
      <div className={'container'}>
        <h1>01-Componentes</h1>
        <Notas />
        {/* <DiaDaSemana />
        <Paridade /> */}

      </div>
    </>
  )
}

export default App
