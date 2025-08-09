import axios from 'axios';

// In Vite, use import.meta.env. Do not reference process.env in the browser.
const envUrl = import.meta?.env?.VITE_API_URL;
export const API_URL = envUrl || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

