import { useState } from 'react'
import './App.css'
import CardProdutos from './components/CardProdutos';

function App() {
  const [produtos, setProdutos] = useState([
    { id: 0, nome: "Kichute", preco: 333, imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQd0rnSJ6TQVUn6P3GX2N0hWU27ohi3FrwbvUoAhiW2SXQuHUfDCeKXbmOxtKUEzNzJ-0VeGiNeH2XqIAw9W02_7-YsZA7cbyRQdZIYLUH_Wq1emTgTPJ6RJA" },
    { id: 1, nome: "Monareta", preco: 654, imagem: "https://static.amazonasbike.com.br/public/amazonasbike/imagens/produtos/bicicleta-amazonas-monareta-aro-20-668bfa89aeebc.png" },
    { id: 2, nome: "Tamagotchi", preco: 22, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUmXVipBtHaSzD8VgTyT9ufdzFhNSxv5Znw&s" },
    { id: 3, nome: "Genius", preco: 100, imagem: "" },
  ])
  function cadastrar(){
    let produtoNovo = { id: Date.now(), nome: "Pogobol", preco: 10, imagem: "" }
    setProdutos([...produtos, produtoNovo])
  }


  return (
    <>
      <h1>Cards</h1>
      <button onClick={cadastrar}>+</button>
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
