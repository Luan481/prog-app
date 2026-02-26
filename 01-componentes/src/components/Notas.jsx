import './Notas.css'

function Notas() {
    function resultaNota(){
        let nota = Number(prompt('Digite a nota / 0-100'))
        if(nota > 80){
            alert('Classificação A')
        }
        else if(nota > 60){
            alert('Classificação B')
        }
        else if(nota > 40){
            alert('Classificação C')
        }
        else if(nota > 20){
            alert('Classificação D')
        }
        else if(nota > 0){
            alert('Classificação E')
            teste()
        }        
    }
    return (
        <div className={'notas'}>
            <h2>Notas</h2>
            <button onClick={resultaNota}>Inserir Nota</button>
        </div>
    )
}

export default Notas
