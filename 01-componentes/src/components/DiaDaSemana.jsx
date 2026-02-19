function DiaDaSemana() {
    function VerificarDia() {
        let dia = Number(prompt('Digite o dia da semana (1 a 7):'))

        switch (dia) {
            case 1:
                alert('Domingo');
                break
            case 2:
                alert('Segunda-feira');
                break
            case 3:
                alert('Terça-feira');
                break
            case 4:
                alert('Quarta-feira');
                break
            case 5:
                alert('Quinta-feira');
                break
            case 6:
                alert('Sexta-feira');
                break
            case 7:
                alert('Sábado');
                break
            default: 
                alert('Dia inválido')
        }

    }

    return (
        <div>
            <h2>Dia da Semana</h2>
            <button onClick={VerificarDia}>Verificar Dia</button>
        </div>
    )
}

export default DiaDaSemana
