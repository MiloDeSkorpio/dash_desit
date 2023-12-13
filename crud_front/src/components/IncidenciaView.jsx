import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getIncidencia } from "../api/incidencia.api"

export function IncidenciaView() {
    const params = useParams()
    const [incidencia, setIncidencia] = useState([])
        useEffect(() => {
        async function loadIncidencia(){
           const res = await getIncidencia(params.id) 
        setIncidencia(res.data)
        }
        loadIncidencia()
        },[])
        // Formatear la fecha de Creacion
        const fechaC = new Date(incidencia.fecha_creacion)
        const year = fechaC.getFullYear();
        const month = (fechaC.getMonth() + 1).toString().padStart(2, '0');  // Mes va de 0 a 11, por eso se suma 1
        const day = fechaC.getDate().toString().padStart(2, '0');
        // Formatea la fecha como "YYYY-MM-DD"
        const fechaCFormateada = `${year}-${month}-${day}`;
        // Formatear la fecha de inicio
        const fechaI = new Date(incidencia.fecha_creacion)
        const yearI = fechaI.getFullYear();
        const monthI = (fechaI.getMonth() + 1).toString().padStart(2, '0');  // Mes va de 0 a 11, por eso se suma 1
        const dayI = fechaI.getDate().toString().padStart(2, '0');
        // Formatea la fecha como "YYYY-MM-DD"
        const fechaIFormateada = `${yearI}-${monthI}-${dayI}`;
        // Formatear la fecha de Creacion
        const fechaE = new Date(incidencia.fecha_creacion)
        const yearE = fechaE.getFullYear();
        const monthE = (fechaE.getMonth() + 1).toString().padStart(2, '0');  // Mes va de 0 a 11, por eso se suma 1
        const dayE = fechaE.getDate().toString().padStart(2, '0');
        // Formatea la fecha como "YYYY-MM-DD"
        const fechaEFormateada = `${yearE}-${monthE}-${dayE}`;
    return (
        <div>
            <div 
            className="bg-zinc-800 p-3 mx-auto max-w-xs"          
        >
            <h1 className="font-bold uppercase py-2 text-center">{incidencia.actividad}</h1>
            <div className="text-slate-400 py-2 flex flex-wrap">
                <p className="p-1">Fecha de Creacion: {fechaCFormateada}</p>
                <p className="p-1">Fecha de Inicio: {fechaIFormateada}</p>
                <p className="p-1">Fecha de Entrega: {fechaEFormateada}</p>
            </div>
            <div className="text-slate-400 py-2 flex flex-wrap">
                <p className="p-1">Dias de Retraso: {incidencia.dias_retraso}</p>
                <p className="p-1">Prioridad: {incidencia.id_prioridad}</p>
                <p className="p-1">Responsable: {incidencia.id_usuario}</p>
                <p className="p-1">Tema: {incidencia.id_tema}</p>
                <p className="p-1">Estatus: {incidencia.id_estatus}</p>
            </div>
            <div className="text-slate-400 py-2 flex flex-wrap">
                <p className="p-1">Descripcion: {incidencia.descripcion}</p>
                <p className="p-1">Observaciones: {incidencia.observaciones}</p>
            </div>
        </div>
        </div>
    )
}