import React from "react";
import { useState } from "react";

function Atv6() {
  const [inputResp, setInputResp] = useState(0);
  let [alcool, setAlcool] = useState(0);
  const [diesel, setDiesel] = useState(0);
  const [gasolina, setGasolina] = useState(0);
  const [mensagem, setMensagem] = useState("");

  function conta() {
    if (Number(inputResp) == 1) {
      setAlcool(alcool + 1);
    } else if (Number(inputResp) == 2) {
      setGasolina(gasolina + 1);
    } else if (Number(inputResp) == 3) {
      setDiesel(diesel + 1);
    } else if (Number(inputResp) == 4) {
      setMensagem("Muito Obrigado!");
    } else {
      alert("Insira um valor válido");
    }
  }
  return (
    <div>
      Atv6
      <ol>
        <li>Álcool</li>
        <li>Gasolina</li>
        <li>Diesel</li>
        <li>FIM</li>
      </ol>
      <input
        type="number"
        value={inputResp}
        onChange={(e) => setInputResp(e.target.value)}
        min={0}
      />
      <button onClick={conta}>Confirmar</button>
      <h3>{mensagem}</h3>
      <h3>Alcool: {alcool}</h3>
      <h3>Gasolina: {gasolina}</h3>
      <h3>Diesel: {diesel}</h3>
    </div>
  );
}

export default Atv6;
