import { Link, Outlet } from "react-router-dom"

function Users() {
  return (
    <>
      <h2>Users</h2>
      <div>Click the user you want to see his/her details</div>

      <ul>
        <li>
          <Link to="111">User 111</Link>
        </li>
        <li>
          <Link to="222">User 222</Link>
        </li>
        <li>
          <Link to="333">User 333</Link>
        </li>
      </ul>

      <Outlet />
    </>
  )
}

export default Users
