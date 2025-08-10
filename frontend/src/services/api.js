import axios from 'axios';

// In Vite, use import.meta.env. Do not reference process.env in the browser.
const envUrl = import.meta?.env?.VITE_API_URL;
export const API_URL = envUrl || 'http://localhost:5000';

// Log API configuration for debugging
console.log('🔗 API Configuration:');
console.log(`   Base URL: ${API_URL}`);
console.log(`   Environment: ${import.meta.env.MODE}`);

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000, // 10 second timeout
});

// Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  console.error('❌ Request error:', error);
  return Promise.reject(error);
});

// Response interceptor
api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  console.error('❌ API Error:', error.response?.status, error.response?.data);
  
  if (error.code === 'ECONNREFUSED') {
    console.error('💡 Connection refused. Make sure your backend server is running.');
    console.error(`   Expected backend at: ${API_URL}`);
  }
  
  if (error.response?.status === 401) {
    // Clear invalid token
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  
  return Promise.reject(error);
});

export default api;

