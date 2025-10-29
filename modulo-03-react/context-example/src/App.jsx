import { UserContext } from "./context/UserContext"
import PersonalData from "./components/PersonalData"
import { useState } from "react"

function App() {
  const [loggedUser, setLoggedUser] = useState({
    id: null,
    name: '',
    email: ''
  })

  /*******************************************************************************/
  /* Hemos usado al principio este método para actualizar el usuario 2 segundos
  /* Después de la recarga de la página para poder observar cómo el contexto
  /* y el DOM se actualizan.
  /*******************************************************************************/
  // setTimeout(() => {
  //   setLoggedUser({
  //     id: 2,
  //     name: 'John Doe',
  //     email: 'johndoe@example.com'
  //   })
  // }, 2000)

  return (
    <>
    <h1>useContext Example</h1>
    
    {/* Envolvemos los componentes que necesitan el contexto con un proveedor de contexto. */}
    {/* Como valor creamos sobre la marcha (on-the-fly) un objeto que contiene todas las   */}
    {/* variables que queremos que estén presentes en el contexto.                         */}
    <UserContext.Provider value={{loggedUser, setLoggedUser}}>
      <PersonalData />
    </UserContext.Provider>
    </>
  )
}

export default App
