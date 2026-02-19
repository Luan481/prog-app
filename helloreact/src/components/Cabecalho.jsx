import React, { useState } from 'react'

function Cabecalho() {
    const [count, setCount] = useState(0)
    function conta(){
        setCount(count + 1)
    }

    return (
        <header>    
            <button onClick={conta}>
            apertou {count}
            </button>
        </header>
    )
}

export default Cabecalho
