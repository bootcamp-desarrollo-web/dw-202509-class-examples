
import { useParams } from "react-router-dom"

function UserInfo() {
  // Extraemos los parametros como atributos de un objeto
  const { userId } = useParams()

  return (
    <>
      <h2>UserInfo</h2>
      <div>User id: { userId }</div>
    </>
  )
}

export default UserInfo
