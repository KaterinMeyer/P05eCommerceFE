import axios from 'axios'

const backendUrlLocal = "http://localhost:4500"
const backendUrlProd = "https://proyecto05ecommerce2023.onrender.com"
const axiosClient = axios.create({
    baseURL: backendUrlLocal
})

export default axiosClient