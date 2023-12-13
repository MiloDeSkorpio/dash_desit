import axios from 'axios'

const estatusApi = axios.create({
    baseURL: 'http://localhost:8000/estatus/api/v1/estatus/'
})

export const getAllEstatus = () => estatusApi.get('/')