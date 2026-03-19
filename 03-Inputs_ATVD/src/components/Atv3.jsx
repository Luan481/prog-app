import { useState, useEffect } from "react";

function Atv3() {
  const [inputNota1, setInputNota1] = useState("");
  const [inputNota2, setInputNota2] = useState("");
  const [status, setStatus] = useState("");
  let media = 0;

  useEffect(() => {
    media = (Number(inputNota1) + Number(inputNota2)) / 2;
    if (media >= 7) {
      setStatus("Aprovado");
    } else if (media < 7 && media > 4) {
      setStatus("Recuperação");
    } else {
      setStatus("Reprovado");
    }
    console.log(media);
  }, [inputNota2]);

  return (
    <div>
      Atv3
      <p>NOTA 1</p>
      <input
        type="number"
        value={inputNota1}
        onChange={(e) => setInputNota1(e.target.value)}
      />
      <p>NOTA 2</p>
      <input
        type="number"
        value={inputNota2}
        onChange={(e) => setInputNota2(e.target.value)}
      />
      <p>Resultado:</p>
      <p>{status}</p>
    </div>
  );
}

export default Atv3;
