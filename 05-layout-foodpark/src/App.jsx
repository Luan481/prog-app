import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Batata from "./pages/Batata";
import Milhion from "./pages/Milhion";
import Pave from "./pages/Pave";

function App() {
  const [tela, setTela] = useState(<Home />);
  useEffect(()=>{
    setTela(<Home setTela={setTela} />)
  }, [])
  return (
    <div className="cont-app">
      <header className="cont-header">
        <nav>
          <h1 onClick={() => setTela(<Home setTela={setTela} />)}>
            Food-Park de comida
          </h1>
          <button className={"botoes-nav"} onClick={() => setTela(<Batata />)}>
            Tabata Batataria
          </button>
          <button className={"botoes-nav"} onClick={() => setTela(<Milhion />)}>
            Milhion Pamonharia
          </button>
          <button className={"botoes-nav"} onClick={() => setTela(<Pave />)}>
            Tio do Pavê
          </button>
        </nav>
      </header>
      <main className="cont-main">{tela}</main>
    </div>
  );
}

export default App;
