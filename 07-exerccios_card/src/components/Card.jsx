import "./Card.css"

function Card({ e }) {
  return (
    <>
      {/* CARROS */}
      {e.id > 0 && e.id < 11 && (
        <div className="cont-card">
          <p>Modelo: {e.modelo}</p>
          <p>Marca: {e.marca}</p>
          <p>Ano: {e.ano}</p>
          <p>Cor: {e.cor}</p>
          <p>KM: {e.quilometragem}</p>
        </div>
      )}

      {/* CAVALOS */}
      {e.id > 10 && e.id < 21 && (
        <div className="cont-card">
          <p>Nome: {e.nome}</p>
          <p>Raça: {e.raca}</p>
          <p>Idade: {e.idade} anos</p>
          <p>Pelagem: {e.pelagem}</p>
        </div>
      )}

      {/* DINOS */}
      {e.id > 100 && e.id < 121 && (
        <div className="cont-card">
          <p>Nome: {e.nome}</p>
          <p>Família: {e.família}</p>
          <p>Peso: {e.peso}</p>
          <p>Altura: {e.altura}</p>
          <p>Comprimento: {e.comprimento}</p>
          <p>Período: {e.períodoHistórico}</p>
        </div>
      )}

      {/* POKEMONS */}
      {e.id > 199 && e.id < 210 && (
        <div className="cont-pokemon">
          <img src={e.imagem} alt={e.nome} />
          <p>{e.nome}</p>
        </div>
      )}

      {/* VIAGENS */}
      {e.id > 299 && e.id < 310 && (
        <div className="cont-card">
          <p>{e.origem} → {e.destino}</p>
          <p>Tempo: {e.tempo}</p>
          <p>Avião: {e.model}</p>
          <p>R$ {e.custo}</p>
        </div>
      )}

      {/* NOTAS */}
      {e.id > 399 && e.id < 410 && (
        <div className="cont-card">
          <p>Matéria: {e.materia}</p>
          <p>Nota: {e.nota}</p>

          {e.desculpa ? (
            <p>Desculpa: {e.desculpa}</p>
          ) : (
            <p>Sem desculpas 😎</p>
          )}
        </div>
      )}

      {/* KPOP */}
      {e.id > 499 && e.id < 510 && (
        <div className="cont-card">
          <p>Grupo: {e.nome}</p>
          <p>Integrantes: {e.integrantes}</p>
          <p>Empresa: {e.empresa}</p>
          <p>Debut: {e.anoDebut}</p>
          <p>Fandom: {e.fandom}</p>
        </div>
      )}

      {/* COMPRAS */}
      {e.id > 599 && e.id < 613 && (
        <div className="cont-compra">
          <p>{e.nome}</p>

          <div className="linha-compra">
            <span>Qtd: {e.quantidade}</span>
            <span>R$ {e.preco}</span>
          </div>

          <h4>Total: R$ {e.valorTotal}</h4>
        </div>
      )}

      {/* TAREFAS */}
      {e.id > 699 && e.id < 713 && (
        <div className="cont-tarefas">
          <p>Tarefa: {e.titulo}</p>
          <p>Responsável: {e.responsavel}</p>

          {e.concluido ? (
            <p style={{ color: "green" }}>Concluído</p>
          ) : (
            <p style={{ color: "red" }}>Incompleto</p>
          )}
        </div>
      )}

      {/* POSTS */}
      {e.id > 799 && e.id < 813 && (
        <div className="cont-post">
          <p>
            {e.emoji} {e.texto}
          </p>

          <div>
            {e.hashtags.map((tag, index) => (
              <span key={index}> {tag} </span>
            ))}

            <span className="cont-like"> 👍 {e.curtidas}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;