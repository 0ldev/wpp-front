import axios from 'axios';

const baseURL = import.meta.env.DEV 
  ? 'http://localhost:3131' 
  : `https://${import.meta.env.VITE_RAILWAY_STATIC_URL}`;

const client = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default client;