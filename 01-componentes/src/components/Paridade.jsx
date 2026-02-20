function Paridade() {
    function calcularParidade(){
        let num = Number(prompt('Digite o número'))
        if(num % 2 == 0){
            alert('Par')
        }
        else{
            alert('Ímpar')
        }
    }
    return (
        <div>
            <h2>Par ou ímpar?</h2>
            <button onClick={calcularParidade}>Paridade</button>       
        </div>
    )
}

export default Paridade
