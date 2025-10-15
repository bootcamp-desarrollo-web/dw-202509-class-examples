function Empleado({name, role, id}) {
    return (
        <div className="card">
            Nombre: {name} <hr />
            Role: {role} <br />
            Contacto: <button>{id}</button>
        </div>
    )
}

export default Empleado