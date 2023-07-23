import axios from 'axios'

const backendUrl = "http://localhost:4500"

const clientAxios = axios.create({
    baseURL: backendUrl
})