
import axios from 'axios'

const http = axios.create({
    baseURL: 'https://localhost:8002/',
    timeout : 15000
})

export default http
