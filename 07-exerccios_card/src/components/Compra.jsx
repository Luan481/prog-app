import React from "react";

function Compra({ c }) {
  return (
    <div className="cont-compra">
      <p>{c.nome} {c.quantidade}un - R${c.preco}  TOTAL:R${c.valorTotal}</p>
    </div>
  );
}

export default Compra;
