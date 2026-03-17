import React, { useEffect, useState } from 'react'

function Atv5() {
    const [inputLinhas, setInputLinhas] = useState('')
    const [linhas, setLinhas] = useState([])

    function criaLinhas() {
        const novasLinhas = []

        for (let i = 0; i < Number(inputLinhas); i++) {
            novasLinhas.push(i)
        }

        setLinhas(novasLinhas)
    }

    useEffect(() => {
        criaLinhas()
    }, [inputLinhas])
    return (
        <div>
            <h3>Quantidade de linhas</h3>

            <input
                type="number"
                value={inputLinhas}
                onChange={(e) => setInputLinhas(e.target.value)}
            />

            {linhas.map((index) => {
                const inicio = index * 4 + 1
                return (
                    <div key={index}>
                        <h1>{`${inicio} ${inicio + 1} ${inicio + 2} PUM`}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Atv5