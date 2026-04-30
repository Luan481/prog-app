import "./CardProduto.css"

function CardProdutos(prop) {
    return (
        <div className="tudo">
            <div className="cont-card">
                <h2>{prop.p.nome}</h2>
                <p>R${prop.p.preco.toFixed(2).replace(".", ",")}</p>
                <img className="imagem" src={prop.p.imagem} loading="Carregando" alt="Falha ao carregar a imagem" height={100} width={150} />
            </div>
        </div>
    )
}

export default CardProdutos