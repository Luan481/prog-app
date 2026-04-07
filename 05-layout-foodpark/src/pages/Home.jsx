import Batata from "./Batata";
import Milhion from "./Milhion";
import "./Paginas.css";
import Pave from "./Pave";

function Home({ setTela }) {
  return (
    <>
      <div className={"cont-home"}>
        <h1>O food park contém as seguintes lojas:</h1>

        <button className={"cont-lojas"} onClick={() => setTela(<Batata />)}>
          <img
            src="https://rafaellindemann.notion.site/image/attachment%3A77df3aab-0012-4ad3-b150-2635c400dfd4%3Aimage.png?table=block&id=303d393f-f68e-8151-9ae4-cf3106ba8cd7&spaceId=fc91fd6e-8ab9-4702-9997-d40bff18f361&width=1180&userId=&cache=v2"
            alt=""
            height={100}
            width={100}
          />
          <h3>Batata da Tabata Batataria</h3>
        </button>
        <button className={"cont-lojas"} onClick={() => setTela(<Milhion />)}>
          <img
            src="https://rafaellindemann.notion.site/image/attachment%3Adab6bf29-c187-4f3a-9332-aed563597b2b%3Aimage.png?table=block&id=303d393f-f68e-8125-8496-c207b322e421&spaceId=fc91fd6e-8ab9-4702-9997-d40bff18f361&width=1180&userId=&cache=v2"
            alt=""
            height={100}
            width={100}
          />
          <h1>Milhion Pamonharia</h1>
        </button>
        <button className={"cont-lojas"} onClick={() => setTela(<Pave />)}>
          <img
            src="https://rafaellindemann.notion.site/image/attachment%3A135b1b8e-0e2b-4a26-bc72-9fc9466365e1%3Aimage.png?table=block&id=303d393f-f68e-80e9-bfcf-f430dcafdb11&spaceId=fc91fd6e-8ab9-4702-9997-d40bff18f361&width=1180&userId=&cache=v2"
            alt=""
            height={100}
            width={100}
          />
          <h3>Tio do Pavê Sobremesas</h3>
        </button>
      </div>
    </>
  );
}

export default Home;
