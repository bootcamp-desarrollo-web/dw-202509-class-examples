import { useOutlet } from "react-router-dom";

function Dashboard() {
    const outlet = useOutlet()

    function dashboardIndexView() {
        // Aquí renderizamos el contenido cuando la URL es del dashboard
        // y no de ningún hijo
        return (
            <>
            <section className="dashboard">
            <h2>Dashboard</h2>
            </section>
            </>
        )
    }

    return outlet ? outlet : dashboardIndexView()
}

export default Dashboard