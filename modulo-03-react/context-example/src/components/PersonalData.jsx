import UserProfile from "./UserProfile"

function PersonalData() {
    return (
        <>
        <h2>Personal Data</h2>
        <p>
            Este componente existe en el ejemplo sólo para demostrar que el contexto continúa propagándose
            hacia los componentes hijos sin necesidad de pasar propiedades manualmente (props drilling).
        </p>
        <UserProfile />
        </>
    )
}

export default PersonalData