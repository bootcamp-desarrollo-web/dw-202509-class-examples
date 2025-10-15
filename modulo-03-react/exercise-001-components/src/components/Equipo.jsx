import Empleado from "./Empleado"

function Equipo() {
    const empleados = [
        {
            name: "Alfonso",
            role: "Diseñador",
            id: 1
        },
        {
            name: "Beatriz",
            role: "CTO",
            id: 3
        },
        {
            name: "Carlota",
            role: "Desarrolladora",
            id: 11
        },
    ]

    return (
        <div className="card-holder">
            <Empleado
                name={empleados[0].name}
                role={empleados[0].role}
                id={empleados[0].id} 
            />
            <Empleado
                name={empleados[1].name}
                role={empleados[1].role}
                id={empleados[1].id}
            />
            <Empleado
                name={empleados[2].name}
                role={empleados[2].role}
                id={empleados[2].id}
            />
        </div>
    )

}

export default Equipo