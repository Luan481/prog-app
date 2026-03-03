import { useState } from "react";

function Xerox() {
    let resultados = []
    const[copia, setCopia] = useState('')
    function copiar(){
        let QtdCopia = Number(prompt('Quantas cópias? '))
        const valor = 0.33

        for(let i = 0; i < QtdCopia ;i++){
            let total = valor * (i+ 1)
            resultados.push(`${i + 1}: R$:${total.toFixed(2)} | `)
        }
        
        
        setCopia(resultados)
    }
    return (
        <div>
            <h2>Xerox</h2>
            <button onClick={copiar}>Copiar</button>
            <p>{copia}</p> 
        </div>
    )
}

export default Xerox
