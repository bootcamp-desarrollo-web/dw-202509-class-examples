import { useState } from "react"

function TodoForm({apiUrl, createCallback}) {
    const emptyFormData = {
        title: '',
    }
    const [formData, setFormData] = useState(emptyFormData)

    // Esta función se  encarga de captar el input del usuario y actualizar la vaiable formData
    function handleChange(e) {
        // ¡Cuidado!
        // Esta linea machaca todo el objeto, si hay más campos se desaparecerán
        // setFormData({title: e.target.value})
        
        // desplegamos el objeto formData y sustituimos sólo el atributo relevante
        // pra ello usamos el 'spread operator':
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
        setFormData({ ...formData, [e.target.name]: e.target.value})
    }

    // Enviar los datos del formulario a la API
    function createTodo(e) {
        e.preventDefault()
        // Creamos un objeto React con los datos del formulario
        const formData = new FormData(e.target)

        // Creamos un object JS
        const formObj = Object.fromEntries(formData)

        fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(formObj)
        })
        .then((res) => {
            if (!res.ok) {
                // throw new Error(`Error: status ${res.status}`)
                throw new Error('Error: status ' + res.status)
            }

            // devolvemos la promesa
            return res.json()
        })
        .then((result) => {
            console.log('>>> got result: ', result)

            setFormData(emptyFormData)

            // Añadimos el resultado al array 'data' que está en App.jsx
            // a través de la función que hemos recibido como prop
            createCallback(result)
        })
        .catch((err) => {
            console.error('ERR:', err.message)

            // Llamamos al callback con el mensaje de error 
            // (importante! el error es el segundo argumento de la función)
            createCallback(null, err.message)
        })
    }

    return (
        <>
        <form onSubmit={createTodo}>
            <input
                name="title"
                value={formData.title}
                placeholder="Todo title"
                onChange={handleChange}
            />
            <button type="submit">SEND</button>

        </form>
        </>
    )
}

export default TodoForm