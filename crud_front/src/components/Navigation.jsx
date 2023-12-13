import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex justify-between py-3 px-2">
            <Link to='/incidencia'><h1 className="font-bold text-3xl mb-4">IncidenciasAPP</h1></Link>
            <button className="bg-green-600 px-3 py-2 rounded-lg">
                <Link to='/incidencia-create'>Crear Incidencia</Link>
            </button>
        </div>
    )
}