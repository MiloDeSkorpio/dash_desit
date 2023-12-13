import axios from 'axios'

const incidenciApi = axios.create({
    baseURL: 'http://localhost:8000/incidencia/api/v1/incidencia/'
})

export const getAllIncidencias = () => incidenciApi.get('/')

export const getIncidencia = (id) => incidenciApi.get(`/${id}/`)

export const createIncidencias = (incidencia) => incidenciApi.post('/',incidencia)

export const deleteIncidencias = (id) => incidenciApi.delete(`/${id}`)

export const updateIncidencias = (id,incidencia) => incidenciApi.put(`/${id}/`,incidencia)


