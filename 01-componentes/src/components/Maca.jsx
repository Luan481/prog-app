import { useState } from 'react'

function Maca() {
    const[saida, setSaida] = useState('')


    // let saida = 'Errozera bruto'
    function compraMaca(){

        let appleQTD = Number(prompt('Quantas maçãs desja comprar?'))
        let preco
        if (appleQTD < 12){
            preco = 0.3
        } 
        else{
            preco = 0.25
        }

        let valor = appleQTD * preco
        alert('Valor: R$' + valor.toFixed(2))
        setSaida(`R$ ${valor.toFixed(2)}`)
    }
    return (
        <div className={'maca-container'}>
            <p>
                resultado: {saida}
            </p>

            <h1>Maçãs</h1>
            <ul>
                <li>Meia duzia ou mais R$: 0.25 UN</li>
                <li>Menos de meia duzia R$: 0.30 UN</li>
            </ul>
            <button onClick={compraMaca}>Comprar maçãs</button>
        </div>
    )
}

export default Maca
