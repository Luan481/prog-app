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
  return (
    <div className='cont-geral'>
      <div className='cont-cadastro'>
        <label>Nome do Item</label>
        <input
          type="text"
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        />
        <label>Imagem do Item</label>
        <input
          placeholder='URL da imagem'
          type="text"
          onChange={(e) => setImg(e.target.value)}
          value={img}
        />
        <label>Preço</label>
        <input
          type="text"
          onChange={(e) => setPreco(e.target.value)}
          value={preco}
        />
        <button onClick={cadastrar}>Registrar Produto</button>
      </div>
        <h2>LISTA DE DESEJOS</h2>
      <div className='cont-lista'>
        {item.map((produto) => (
          <Itens i={produto} key={produto.id} />
        ))}
      </div>
    </div>
  )
}

export default App
