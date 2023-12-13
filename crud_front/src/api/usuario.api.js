import axios from 'axios'

const usuarioApi = axios.create({
    baseURL: 'http://localhost:8000/usuario/api/v1/usuario/'
})

export const getAllUsuarios = () => usuarioApi.get('/')

export const createUsuario = (usuario) => usuarioApi.post('/',usuario)

export const deleteUsuario = (id) => usuarioApi.delete(`/${id}/`,id)

export const updateUsuario = (id,usuario) => usuarioApi.put(`/${id}/`,usuario)

export const login = (email,pass) => usuarioApi.post('/login',email,pass)



