import { useNavigate } from "react-router-dom"
export function IncidenciaCard({incidencia}) {
    const navigate = useNavigate()

    return (
        <div 
            className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer max-w-xs"
            onClick={()=>{
                navigate(`/incidencia/${incidencia.id}/`)
            }}            
        >
        <h1 className="font-bold uppercase">{incidencia.actividad}</h1>
        <div className="text-slate-400">
            <p>Fecha de Creacion: {incidencia.fecha_creacion}</p>
            <p>Descripcion: {incidencia.descripcion}</p>
            <p>Dias de Retraso: {incidencia.dias_retraso}</p>
            <p>Estatus: {incidencia.id_estatus}</p>
        </div>
    </div>
    )
}