import axios from 'axios';

const baseURL = import.meta.env.DEV 
  ? 'http://localhost:3131' 
  : `${import.meta.env.VITE_RAILWAY_STATIC_URL}`;

const prodEnv: string = 'https://server-production-8c26.up.railway.app'
console.log('VITE_RAILWAY_STATIC_URL:', import.meta.env.VITE_RAILWAY_STATIC_URL);
const client = axios.create({
  baseURL: prodEnv,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default client;