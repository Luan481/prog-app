function Maca() {
    function compraMaca(){
        let appleQTD = Number(prompt('Quantas maçãs desja comprar?'))
        let val
        if (appleQTD < 12){
            val = appleQTD * 0.3
            alert('Total de ' + appleQTD + ' maçãs é R$: ' + val)
        } 
        else{
            val = appleQTD * 0.25
            alert('Total de ' + appleQTD + ' maçãs é R$: ' + val)
        }
    }
    return (
        <div className={'maca-container'}>
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
