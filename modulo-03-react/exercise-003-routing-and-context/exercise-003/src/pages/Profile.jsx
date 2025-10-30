import { useContext } from "react"
import { LoggedUserContext } from "../context/loggedUserContext"

function Profile() {
    const loggedUser = useContext(LoggedUserContext)
    
    return (
        <>
        <section className="dashboard">
          <h2>Perfil de usuario</h2>
          <p><strong>ID:</strong> {loggedUser.id}</p>
          <p><strong>Nombre:</strong> {loggedUser.name}</p>
        </section>
        </>
    )
}

export default Profile