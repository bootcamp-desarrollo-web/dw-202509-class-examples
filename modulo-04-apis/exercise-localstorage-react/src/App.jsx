import { useEffect, useState } from "react"

function App() {
  // Esta constante se sirve para iniciar el formulario y para volver
  // a limpiarlo una vez enviado al servidor
  const emptyFormData = {
    asunto: '',
    nombre: '',
    mensaje: ''
  }

  const [formData, setFormData] = useState(emptyFormData)

  // Inicamos el formulario desde localStorage
  function initFormFromLocalStorage() {
    // Primero leemos el registro que hemos guardado en localStorage
    const formDataValue = localStorage.getItem('formDataValue')

    // Comprobamos que realmente hay registro guardado en el localStorage
    // (la primera vez que entramos a la página no vamos a tener este registro)
    if (!formDataValue) {
      return
    }

    // localStorage guarda toda la información como strings, por lo tanto tenemos que 
    // parsearla para pasarla de string a un objeto
    const formDataObj = JSON.parse(formDataValue)

    // Iniciamos la variable formData con lo guardado en localStorage
    setFormData(formDataObj)
  }
  useEffect(initFormFromLocalStorage, [])

  // Manejamos cambios en el formulario
  function handleChange(e) {
    // Primero creamos un objeto clonado de 'formData' con los cambios
    // que han disparado este evento
    const inputName = e.target.name
    const inputValue = e.target.value
    const updatedFormData = { ...formData, [inputName]: inputValue}

    // Una vez obtenido un objeto con los datos actualizamos, actualizamos la variable (state) 
    // 'formData', y por otro lado guardamos la información en localStorage.
    // Ya que localStorage puede guardar únicamente strings, usamos JSON.stringify para ello
    setFormData(updatedFormData)
    localStorage.setItem('formDataValue', JSON.stringify(updatedFormData))
  }

  // Enviamos el formulario al servidor
  function submitForm(e) {
    e.preventDefault()
    console.log('Submit form: ', formData)
    // Aquí nos falta enviar el formulario al servidor via API
    // La limpieza del formulario la tendríamos que hacer dentro del 'then'
    // de la promesa de fetch
    setFormData(emptyFormData)
  }

  return (
    <>
    <div className="container">
      <h3>Escríbenos</h3>

      <form onSubmit={submitForm}>
        <div className="field">
            <label htmlFor="asunto">Asunto</label>
            <input type="text" id="asunto" name="asunto"
                value={formData.asunto} onChange={handleChange}
            />
        </div>

        <div className="field">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" 
                value={formData.nombre} onChange={handleChange}
            />
        </div>

        <div className="field">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea type="text" id="mensaje" name="mensaje" />
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
    </>
  )
  
}

export default App
