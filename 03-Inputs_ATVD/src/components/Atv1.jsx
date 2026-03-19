import { useState } from "react";

function Atv1() {
  const [inputN, setInputN] = useState("");
  const [inputM, setInputM] = useState("");
  return (
    <div style={{ padding: 10 }}>
      Atv1
      <div className={"input-container"} style={{ marginBottom: 10 }}>
        <label htmlFor="">Pressão desejada </label>
        <input
          type="number"
          value={inputN}
          onChange={(e) => setInputN(e.target.value)}
          max="40"
          min="0"
        />
      </div>
      <div className={"input-container"} style={{ marginBottom: 10 }}>
        <label htmlFor="">Pressão lida </label>
        <input
          type="number"
          value={inputM}
          onChange={(e) => setInputM(e.target.value)}
          max="40"
          min="0"
        />
      </div>
      Diferença de pressão {inputN - inputM}
    </div>
  );
}

export default Atv1;
