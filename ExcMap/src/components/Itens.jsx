import React from 'react'
import './Itens.css'
function Itens({ i, excluir }) {
    return (
        <div className='cont-card'>
            <img
                src={
                    i.img === ''
                        ? 'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image'
                        : i.img
                }
                alt=""
                height={100}
            />

            <p>Item: {i.nome}</p>
            <p>Valor: R${Number(i.preco).toFixed(2)}</p>
            <button onClick={() => (excluir(i.id))}>🗑️</button>
        </div>
    )
}

export default Itens