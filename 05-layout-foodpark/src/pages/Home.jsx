import Batata from "./Batata"
import "./Paginas.css"

function Home(props) {

    return (
        <>
            <div className={"cont-home"}>
                <ul>
                    <li className={'cont-lojas'}>
                        <img src="https://rafaellindemann.notion.site/image/attachment%3A77df3aab-0012-4ad3-b150-2635c400dfd4%3Aimage.png?table=block&id=303d393f-f68e-8151-9ae4-cf3106ba8cd7&spaceId=fc91fd6e-8ab9-4702-9997-d40bff18f361&width=1180&userId=&cache=v2" alt="" height={50} width={50} />
                        <h3>Batata da Tabata Batataria</h3>
                    </li>
                    <li className={'cont-lojas'}>
                        <img src="https://rafaellindemann.notion.site/image/attachment%3Adab6bf29-c187-4f3a-9332-aed563597b2b%3Aimage.png?table=block&id=303d393f-f68e-8125-8496-c207b322e421&spaceId=fc91fd6e-8ab9-4702-9997-d40bff18f361&width=1180&userId=&cache=v2" alt="" height={50} width={50} />
                        <h3>Milhion Pamonharia</h3>
                    </li>
                    <li className={'cont-lojas'}>
                        <img src="https://rafaellindemann.notion.site/image/attachment%3A135b1b8e-0e2b-4a26-bc72-9fc9466365e1%3Aimage.png?table=block&id=303d393f-f68e-80e9-bfcf-f430dcafdb11&spaceId=fc91fd6e-8ab9-4702-9997-d40bff18f361&width=1180&userId=&cache=v2" alt="" height={50} width={50} />
                        <h3>Tio do Pavê Sobremesas</h3>
                    </li>
                </ul>
            </div >
        </>
    )
}

export default Home