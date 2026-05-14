import "./Card.css";

function Card({ e }) {
  return (
    <>
      {e.id > 699 && e.id < 713 && (
        <div className="cont-tarefas">
          <p>Tarefas: {e.titulo}</p>
          <p>Responsável: {e.responsavel}</p>

          {e.concluido ? <p style={{color: "green"}}>Concluído</p> : <p style={{color: "red"}}>Incompleto</p>}
        </div>
      )}
      {e.id > 799 && e.id < 813 && (
        <div className="cont-post">
          <p>
            {e.emoji} {e.texto}
          </p>
          <div >
              {e.hashtags} <label className="cont-like">👍{e.curtidas}</label>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
