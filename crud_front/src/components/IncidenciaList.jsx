import { useEffect, useState } from "react"
import { getAllIncidencias } from '../api/incidencia.api'
import { IncidenciaCard } from "./IncidenciaCard"
export function IncidenciaList() {
    const [incidencias, setIncidencias] = useState([])
    useEffect(() =>{
     async  function loadIncidencias() {
            const res = await getAllIncidencias()
            setIncidencias(res.data)
        }
        loadIncidencias()
    },[])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
      {incidencias.map(incidencia => (
        <IncidenciaCard key={incidencia.id} incidencia={incidencia} />
      ))}
    </div>
  )
}

