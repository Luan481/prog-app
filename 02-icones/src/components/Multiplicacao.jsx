import {useState} from 'React'

function Multiplicacao() {
    const[result, setResult] = useState('')
    function multiplicar(){
    let num = Number(prompt('Número: '))

    setResult(
        `1x${num} = ${num * 1} |
        2x${num} = ${num * 2} |
        3x${num} = ${num * 3} |
        4x${num} = ${num * 4} |
        5x${num} = ${num * 5} |
        6x${num} = ${num * 6} |
        7x${num} = ${num * 7} |
        8x${num} = ${num * 8} |
        9x${num} = ${num * 9} |
        10x${num} = ${num * 10}`)
    }
    
    return (
        <div>
            <h2>Multiplicação</h2>
            <button onClick={multiplicar}>Multiplicar</button>
            <p>Resultado: {result}</p>
        </div>
    )
}

export default Multiplicacao
