import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Atv7() {
  const [inputLesma, setInputLesma] = useState(0);
  const [inputVelocidade, setInputVelocidade] = useState(0);
  const [nivel, setNivel] = useState("");
  useEffect(() => {
    if (Number(inputVelocidade) <= 10) {
      setNivel("Nível 1");
    } else if (Number(inputVelocidade) > 10 && Number(inputVelocidade) <= 20) {
      setNivel("Nível 2");
    } else {
      setNivel("Nível 3");
    }
  }, [inputVelocidade]);
  return (
    <div>
      Atv7
      <h3>Quantas lesmas</h3>
      <input
        type="number"
        value={inputLesma}
        onChange={(e) => setInputLesma(e.target.value)}
      />
      <h3>Qual a velocidade mais rapida</h3>
      <input
        type="number"
        value={inputVelocidade}
        onChange={(e) => setInputVelocidade(e.target.value)}
      />
      <h3>{nivel}</h3>
    </div>
  );
}

export default Atv7;
