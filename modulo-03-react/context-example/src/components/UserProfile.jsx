import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function UserProfile() {
    // Recibimos en el contexto lo que se asigna desde el nivel superior (el proveedor del contexto)
    const {loggedUser, setLoggedUser} = useContext(UserContext)
    
    // En estas funciones (login, logout) estamos llamando al setter del state que hemos declarado
    // en App.jsx y que hemos pasado a través del contexto.
    // En esta forma nos aseguramos que el DOM se actualice donde sea necesario.
    function login() {
        setLoggedUser({
            id: 4,
            name: 'John Doe',
            email: 'johndoe@example.com'
        })
    }

    function logout() {
        setLoggedUser({
            id: null,
            name: '',
            email: ''
        })
    }

    return (
        <>
        <h3>User Profile</h3>
        <p>ID: { loggedUser.id }</p>
        <p>Nombre: { loggedUser.name }</p>
        <p>email: { loggedUser.email }</p>

        <button onClick={login}>Login</button>
        <button onClick={logout}>Logout</button>
        </>
    )
}

export default UserProfile