import { useParams } from "react-router-dom"

function Members() {
  // Extraemos los parametros como un objeto 
  const params = useParams()

  return (
    <>
      <h4>Members</h4>
      <div>Member id: {params.id}</div>
    </>
  )
}

export default Members
