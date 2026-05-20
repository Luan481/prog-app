import React from 'react'

function Itens({ i }) {
    return (
        <div>
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
            <p>Valor: {Number(i.preco).toFixed(2)}</p>
        </div>
    )
}

export default Itens