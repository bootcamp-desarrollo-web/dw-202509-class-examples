import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"

function App() {
  // ¡Importante!
  // Crear un fichero .env con las variables necesarias
  const baseApiUrl = import.meta.env.VITE_API_URL
  const userId = import.meta.env.VITE_API_USER_ID
  const secret = import.meta.env.VITE_API_SECRET
  
  // Montamos la url principal de la api (para todas las operaciones)
  const apiUrl = `${baseApiUrl}/todos/${userId}/${secret}`

  const [data, setData] = useState()
  const [error, setError] = useState()

  function fetchData() {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          // throw new Error(`Error: status ${res.status}`)
          throw new Error('Error: status ' + res.status)
        }

        // devolvemos la promesa
        return res.json()
      })
      .then((result) => {
        // Aquí tenemos un json con la respuesta
        // console.log('result: ', result)

        if (!Array.isArray(result)) {
          throw new Error('result is not an array')
        }

        setData(result)
      })
      .catch((err) => {
        console.error('ERR:', err.message)
        setError(err.message)
      })
  }

  // Importante! Usamos useEffect para evitar problemas como ejecución infinita, etc.
  useEffect(fetchData, [])

  if (error) {
    return <div className="error">Got error: {error}</div>
  }

  if (!data) {
    return <div>Loading...</div>
  }

  function printRow(row) {
    return (
      <tr key={row._id}>
        <td>{row._id}</td>
        <td>{row.title}</td>
        <td>{ row.completed ? 'V' : 'X' }</td>
      </tr>
    )
  }

  function createCallback(res, err) {
    if (err) {
      setError(err)
    } else {
      setData([...data, res])
    }
  }

  return (
    <>
    <h3>Hola App</h3>
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
        </tr>
      </thead>
      {/* imprimir una linea para cada registro del array 'data' */}
      <tbody>
        { data.map(row => printRow(row)) }
      </tbody>
    </table>

    <h3>Create new TODO</h3>
    <TodoForm apiUrl={apiUrl} createCallback={createCallback}/>
    </>
  )
}

export default App
