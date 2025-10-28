import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/users">Users</Link>

      <div style={{marginTop: '30px'}}>
        Este ejemplo muestra cómo utilizar el sistema de enrutamiento (<i>routing</i>),
        especialmente para trabajar con jerarquías y rutas dinámicas.
      </div>
      <Outlet />
    </>
  )
}

export default App;
