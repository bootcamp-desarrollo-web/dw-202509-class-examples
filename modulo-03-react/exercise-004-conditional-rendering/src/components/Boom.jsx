function Boom({counter}) {
    // Comprobar si se divide en 7
    const isMultipleOfSeven = (counter % 7) === 0

    // Comprobar si existe el dígito 7
    const hasDigitSeven = counter.toString().includes('7')

    // Is boom si una de las condiciones anteriores se cumple
    const isBoom = isMultipleOfSeven || hasDigitSeven

    function showBoomStr() {
        if (isBoom) {
            return '💥 ¡BOOM! 💥'
        } else {
            return '-'
        }
    }

    return (
        <>
        { counter } <br/>

        <div className="boom-div">
            con operador ternario: <br />
            { isBoom ? '💥 ¡BOOM! 💥' : '-' }
        </div>

        <div className="boom-div">
            con <code>if</code>: <br />
            { showBoomStr() }
        </div>
        </>
    )
}

export default Boom