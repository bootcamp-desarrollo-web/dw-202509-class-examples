import { useEffect, useState } from "react"

function App() {
  // ¡Importante!
  // Crear un fichero .env con las variables necesarias
  const apiUrl = import.meta.env.VITE_API_URL
  const userId = import.meta.env.VITE_API_USER_ID
  const secret = import.meta.env.VITE_API_SECRET

  // Creamos dos variables con useState para almacenar los datos devueltos del servidor,
  // y por otro lado los errores que puedan aparecer durante el proceso
  const [data, setData] = useState()
  const [error, setError] = useState()

  // Usamos useEffect ya que la respuesta del servidor es un efecto secundario que cambia 
  // el contenido del html generado
  useEffect(() => {
    fetch(apiUrl)
    .then(
      (response) => {
        // Comprobar errores de HTTP (403, 404, 500)
        if (!response.ok) {
          throw new Error(`[ERROR] Got status ${response.status}`)
        }

        // Esta llamada devuelve una promesa que la tendremos que captar con otro .then()
        return response.json()
      }
    )
    .then(data => setData(data)
    )
    .catch(err => setError(err.message)
    )
  }, [apiUrl, userId, secret])
  // En este caso la lista de dependencias podría ser también []

  // usamos if para distinguir entre tres casos:
  // - Se ha producido un error
  // - Aún estamos esperando a la respuesta del servidor
  // - Ya están los datos disponibles
  if (error) {
    return <div className="error">Error: {error}</div>
  }
  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <>
    <div>
      <h3>Data:</h3>
      <code>{JSON.stringify(data)}</code>
    </div>
    </>
  )
}

export default App
