import axios from 'axios';

const baseUrl = import.meta.env.VITE_API_BASE_URL;
console.log('baseUrl', baseUrl)
const api = axios.create({
  baseURL: baseUrl || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json', // Set your desired content-type
  },
});

export default api;

