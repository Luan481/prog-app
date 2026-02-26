import './App.css'
import DiaDaSemana from './components/DiaDaSemana';
import Paridade from './components/Paridade';
import Notas from './components/Notas';
import Voto from './components/Voto';
import Maca from './components/Maca';
import FeriasJuca from './components/FeriasJuca';

function App() {
  return (
    <>
      <div className={'container'}>
        <h1>01-Componentes</h1>
        <FeriasJuca />
        {/* <Maca /> */}
        {/* <Voto /> */}
        {/* <Notas /> */}
        {/* <DiaDaSemana />
        <Paridade /> */}

      </div>
    </>
  )
}

export default App
