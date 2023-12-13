import { useForm } from 'react-hook-form'
import { createIncidencias, deleteIncidencias, updateIncidencias, getIncidencia } from '../api/incidencia.api'
import { getAllUsuarios } from '../api/usuario.api'
import { getAllTemas } from '../api/tema.api'
import { getAllEstatus } from '../api/estatus.api'
import { getAllPrioridad } from '../api/prioridad.api'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function IncidenciaFormPage () {
    
    const [usuarios, setUsuarios] = useState([])
    const [temas, setTemas] = useState([])
    const [estatus, setEstatus] = useState([])
    const [prioridad, setPrioridad] = useState([])
    const { 
        register, 
        handleSubmit, 
        formState: {errors},
        setValue
    } = useForm()
    const navigate = useNavigate()
    const params = useParams()
    
    const onSubmit = handleSubmit( async (data) => {
        if(params.id) {
            await updateIncidencias(params.id,data)
            toast.success('Incidencia Actualizada',{
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#FFF"
                }
            })
        } else {
            await createIncidencias(data)
            toast.success('Incidencia Creada',{
                position: "top-center",
                style: {
                    background: "#101010",
                    color: "#FFF"
                }
            })
        }
        navigate('/')
    })
    useEffect(() => {
        async function loadIncidencia() {
            if(params.id) {
                const {data: {actividad, tiempo_elaboracion, dias_retraso, descripcion, observaciones, id_usuario, id_tema,id_prioridad,id_estatus }} = await getIncidencia(params.id) 
                setValue('actividad',actividad)
                setValue('tiempo_elaboracion',tiempo_elaboracion)
                setValue('dias_retraso',dias_retraso)
                setValue('descripcion',descripcion)
                setValue('observaciones',observaciones)
                setValue('id_usuario',id_usuario)
                setValue('id_tema',id_tema)
                setValue('id_prioridad',id_prioridad)
                setValue('id_estatus',id_estatus)
            }
        }
        loadIncidencia()
        async function loadUsuarios() {
            const res = await getAllUsuarios()
            setUsuarios(res.data)
        }
        loadUsuarios()
        async function loadTemas() {
            const res = await getAllTemas()
            setTemas(res.data)
        }
        loadTemas()
        async function loadEstatus() {
            const res = await getAllEstatus()
            setEstatus(res.data)
        }
        loadEstatus()
        async function loadPrioridad() {
            const res = await getAllPrioridad()
            setPrioridad(res.data)
        }
        loadPrioridad()
    },[])
    return (
      <div className='max-w-xl mx-auto bg-zinc-800 p-3 rounded-lg'>
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Nombre de Actividad" {...register('actividad',{required: true})} className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'/>
            {errors.actividad && <span>El nombre de la actividad es requerido</span>}
            <input type="number" placeholder="Tiempo Elaboracion(Dias)" {...register('tiempo_elaboracion',{required: true})} className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'/>
            {errors.tiempo_elaboracion && <span>El nombre de la actividad es requerido</span>}
            <input type="number" placeholder="Dias de Retraso" {...register('dias_retraso',{required: true})} className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'/>
            {errors.dias_retraso && <span>El nombre de la actividad es requerido</span>}
            <textarea rows="3" placeholder="Descripción" {...register('descripcion',{required: true})} className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'></textarea>
            {errors.descripcion && <span>La Descripción es requerida</span>}
            <textarea rows="3" placeholder="Observaciónes" {...register('observaciones',{required: true})} className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'></textarea>
            {errors.observaciones && <span>La Observación es requerida</span>}
            <select {...register('id_usuario')} className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'>
                    <option value="0">-Selecciona-</option>
                {usuarios.map(usuario => (
                    <option key={usuario.id} value={usuario.id}>
                    {usuario.nombre}
                    </option>
                ))}
            </select>
            {errors.id_usuario && <span>Selecciona un Ususario</span>}
            <select {...register('id_tema')} className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'>
                <option value="0">-Selecciona-</option>
                {temas.map(tema => (
                    <option key={tema.id} value={tema.id}>
                    {tema.nombre}
                    </option>
                ))}
            </select>
            {errors.id_tema && <span>Selecciona la Prioridad</span>}
            <select {...register('id_prioridad')} className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'>
                <option value="0">-Selecciona-</option>
                {prioridad.map(prio => (
                    <option key={prio.id} value={prio.id}>
                    {prio.nombre}
                    </option>
                ))}
            </select>
            {errors.id_prioridad && <span>Selecciona la prioridad</span>}
            <select {...register('id_estatus')} className='bg-zinc-700 rounded-lg block w-full mb-3 p-1'>
                <option value="0">-Selecciona-</option>
                {estatus.map(estate => (
                    <option key={estate.id} value={estate.id}>
                    {estate.nombre}
                    </option>
                ))}
            </select>
            {errors.id_estatus && <span>Selecciona el Estatus</span>}
            <div>
                <button className="bg-green-600 p-3 mt-3 w-full rounded-lg">Guardar</button>
            </div> 
        </form>

        {params.id && 
            <div className='flex justify-end'>
                <button 
                className='bg-red-600 p-3 rounded-lg w-48 mt-3'
                onClick={ async ()=>{
                    const accepted = window.confirm('¿Estas Seguro?')
                    if(accepted){
                        await deleteIncidencias(params.id)
                        toast.success('Incidencia Eliminada',{
                            position: "top-center",
                            style: {
                                background: "#101010",
                                color: "#FFF"
                            }
                        })
                        navigate('/')
                    }
            }}>Delete</button>
            </div>
        }
        
      </div>
    )
  }
  
  
  