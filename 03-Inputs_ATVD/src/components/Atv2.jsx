import { useEffect, useState } from "react";

function Atv2() {
  const [inputNum, setInputNum] = useState("");
  const mensagem = "Ho ";
  const qtdHo = [];
  const [res, setRes] = useState([]);

  useEffect(() => {
    const quantidade = inputNum;
    for (let i = 0; i < quantidade; i++) {
      qtdHo.push(mensagem);
    }
    if (qtdHo.length != 0) {
      qtdHo[qtdHo.length - 1] = "Ho!";
    }

    setRes(qtdHo);
  }, [inputNum]);
  console.log(qtdHo);
  return (
    <div>
      Atv2
      <p>Quantos Ho's</p>
      <input
        type="number"
        value={inputNum}
        onChange={(e) => setInputNum(e.target.value)}
      />
      <br />
      <br />
      {res}
    </div>
  );
}

export default Atv2;
