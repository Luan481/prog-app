import React, { useEffect, useState } from "react";

function Atv8() {
  const [valA, setValA] = useState(0);
  const [valB, setValB] = useState(0);
  const [aumento, setAumento] = useState("");

  useEffect(() => {
    let result = ((valB - valA) / valA) * 100;
    setAumento(`${result.toFixed(2)}%`);
  }, [valA, valB]);
  return (
    <>
      Atv8
      <br />
      <h3>Valor Antigo:</h3>
      <input
        type="number"
        value={valA}
        onChange={(e) => setValA(e.target.value)}
        max={1000}
        min={0}
      />
      <h3>Valor Atual:</h3>
      <input
        type="number"
        value={valB}
        onChange={(e) => setValB(e.target.value)}
        max={1000}
        min={0}
      />
      <h2>Aumento: {aumento}</h2>
    </>
  );
}

export default Atv8;
