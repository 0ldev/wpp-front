import axios from 'axios';
import type { AxiosInstance } from 'axios';


const client: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api'
})

export default client;