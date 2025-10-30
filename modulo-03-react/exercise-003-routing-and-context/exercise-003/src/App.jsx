import { Link, Outlet } from "react-router-dom"
import { LoggedUserContext } from "./context/loggedUserContext"

function App() {
  const loggedUser = {
    id: 1,
    name: "Juan Pérez",
  }

  return (
    <>
      <header>
        <h1>Mi App React</h1>
      </header>

      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/profile">Perfil</Link>
        <Link to="/dashboard/user/123">Usuario 123</Link>
        <Link to="/dashboard/user/456">Usuario 456</Link>
      </nav>

      <main>
        <LoggedUserContext.Provider value={loggedUser}>
          <Outlet />
        </LoggedUserContext.Provider>
      </main>
    </>
  )
}

export default App;
