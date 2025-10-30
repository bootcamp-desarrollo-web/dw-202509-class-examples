import { useParams } from "react-router-dom"

function User() {
  const { userId } = useParams()

  const users = [
    {
      id: 123,
      name: "María Fernández",
    },
    {
      id: 456,
      name: "Paula García",
    },
  ]

  // Usamos la función 'find' para encontrar el registro relevante dentro del array 'users'
  const currentUser = users.find(el => {
    return el.id == userId
  })

  return (
    <>
      <section className="dashboard">
        <h2>Detalles de Usuario</h2>
        <p><strong>ID:</strong> {currentUser.id}</p>
        <p><strong>Nombre:</strong> {currentUser.name}</p>
      </section>
    </>
  )
}

export default User