import axios from 'axios'

const temaApi = axios.create({
    baseURL: 'http://localhost:8000/tema/api/v1/tema/'
})

export const getAllTemas = () => temaApi.get('/')