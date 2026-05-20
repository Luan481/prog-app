import { useState } from 'react'
import './App.css'
import CardProdutos from './components/CardProdutos';

function App() {
  const [produtos, setProdutos] = useState([
    { id: 0, nome: "Kichute", preco: 333, imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQd0rnSJ6TQVUn6P3GX2N0hWU27ohi3FrwbvUoAhiW2SXQuHUfDCeKXbmOxtKUEzNzJ-0VeGiNeH2XqIAw9W02_7-YsZA7cbyRQdZIYLUH_Wq1emTgTPJ6RJA" },
    { id: 1, nome: "Monareta", preco: 654, imagem: "https://static.amazonasbike.com.br/public/amazonasbike/imagens/produtos/bicicleta-amazonas-monareta-aro-20-668bfa89aeebc.png" },
    { id: 2, nome: "Tamagotchi", preco: 22, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUmXVipBtHaSzD8VgTyT9ufdzFhNSxv5Znw&s" },
    { id: 3, nome: "Genius", preco: 100, imagem: "data:image/jpeg;base64,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" },
  ])

  const [inputNome, setInputNome] = useState('')
  const [inputPreco, setInputPreco] = useState('')
  const [inputImagem, setInputImagem] = useState('')

  function cadastrar() {
    let produtoNovo = {
      id: Date.now(),
      nome: inputNome,
      preco: Number(inputPreco),
      imagem: inputImagem
    }
    setProdutos([...produtos, produtoNovo])
  }


  return (
    <>
      <h1>Cards</h1>
      <div className="cont-form">
        <h2>Cadastro de coisas</h2>
        <div className="input-container">
          <label htmlFor="">Imagem</label>
          <input type="text"
            value={inputImagem}
            onChange={(e) => setInputImagem(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="">Nome</label>
          <input type="text"
            value={inputNome}
            onChange={(e) => setInputNome(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="">Preço</label>
          <input type="text"
            value={inputPreco}
            onChange={(e) => setInputPreco(e.target.value)} />
        </div>
        <button onClick={cadastrar}>+</button>
      </div>
      <div className='lista-cards'>
        {
          produtos.map((produto) => (

            <CardProdutos p={produto} key={produto.id} />
          ))
        }
      </div>
    </>
  )
}

export default App
