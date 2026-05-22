import { useState } from 'react'
import './App.css'
import Itens from './components/Itens'

function App() {
  const [item, setItem] = useState([])
  const [nome, setNome] = useState('')
  const [img, setImg] = useState('')
  const [preco, setPreco] = useState('')
  function cadastrar() {
    let ProdutoNovo = {
      id: Date.now(),
      nome: nome,
      img: img,
      preco: preco,
    }
    if (nome == "" || nome == null) {
      alert("Item inválido")
      return
    }
    setItem([...item, ProdutoNovo])
    setNome('')
    setImg('')
    setPreco('')

  }

  function excluir(identificador) {
    const novaLista = item.filter(
      (produto) => produto.id !== identificador
    )

    setItem(novaLista)
  }

  return (
    <div className='cont-geral'>
      <div className='cont-cadastro'>
        <div className='campo'>
          <label>Nome do Item</label>
          <input
            placeholder='Nome desejado'
            type="text"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
        </div>

        <div className='campo'>
          <label>Imagem do Item</label>
          <input
            placeholder='URL da imagem'
            type="text"
            onChange={(e) => setImg(e.target.value)}
            value={img}
          />
        </div>

        <div className='campo'>
          <label>Preço</label>
          <input
            placeholder='Valor desejado'
            type="text"
            onChange={(e) => setPreco(e.target.value)}
            value={preco}
          />
        </div>
        <button onClick={cadastrar}>Registrar Produto</button>
      </div>
      <h2>LISTA DE DESEJOS</h2>
      <div className='cont-lista'>
        {item.map((produto) => (
          <Itens i={produto} key={produto.id} excluir={excluir} />
        ))}
      </div>
    </div>
  )
}

export default App
