import axios from 'axios'

const prioridadApi = axios.create({
    baseURL: 'http://localhost:8000/prioridad/api/v1/prioridad/'
})
export const getAllPrioridad = () => prioridadApi.get('/')