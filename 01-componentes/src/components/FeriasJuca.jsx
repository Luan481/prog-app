import { useState } from "react";

function FeriasJuca() {
    const[val, setVal] = useState(0)

    function valDiaria(){
        let dias = Number(prompt('Dias de hospedagem:'))
        let val
        if (dias <= 5) {
            val = 100
        }
        else if(dias >= 6 && dias <= 10){
            val = 90
        }
        else{
            val = 80
        }

        let valBruto = dias * val
        let desconto10 = valBruto * 0.1
        let desconto15 = valBruto * 0.15
        let multa = 150
        let valFinal = valBruto - desconto10 - desconto15 + multa
        
        setVal(`R$ ${valFinal.toFixed(2)}`)
    }
    return (
        <div>
            <h2>Albergue</h2>
            <h3>Diaria</h3>
            <ul>
                <li>Até 5 dias: R$100,00</li>
                <li>6 a 10 dias: R$90,00</li>
                <li>Apartir de 11 dias: R$80,00</li>
            </ul>
            <button onClick={valDiaria}>Hospedar-se</button>
            <h2>Valor Final: {val}</h2>
        </div>
    )
}

export default FeriasJuca
