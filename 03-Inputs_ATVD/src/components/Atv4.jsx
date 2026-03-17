import { useState, useEffect } from 'react'

function Atv4() {
    const [inputAlunos, setInputAlunos] = useState('')
    const [inputMonitores, setInputMonitores] = useState('')
    const [estado, setEstado] = useState('')

    useEffect(() => {
        if (Number(inputAlunos) + Number(inputMonitores) > 50) {
            setEstado('N')
        }
        else {
            setEstado('S')
        }
    }, [inputMonitores, inputAlunos])
    return (
        <div>Atv4
            <h3>Alunos</h3>
            <input type="number"
                value={inputAlunos}
                onChange={(e) => setInputAlunos(e.target.value)} />
            <h3>Monitores</h3>
            <input type="number"
                value={inputMonitores}
                onChange={(e) => setInputMonitores(e.target.value)} />

            <h2>Situação: {estado}</h2>
        </div>

    )
}

export default Atv4