import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";


function App() {
  const [tela, setTela] = useState(<Home />)
  return (
    <div className="cont-app">
      <header className="cont-header">
        <nav>
          <h1 onClick={() => setTela(<Home />)}>Food-Park de comida</h1>
        </nav>
      </header>
      <main className="cont-main">
        {tela}
      </main>
    </div>
  )
}

export default App;
