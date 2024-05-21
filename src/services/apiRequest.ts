import axios from "axios";

const apiRequest = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
});

// Interceptor to include token in headers
apiRequest.interceptors.request.use((config) => {
  const token = document.cookie.split('; ').find(row => row.startsWith('token='));
  if (token) {
    config.headers.Authorization = `Bearer ${token.split('=')[1]}`;
  }
  return config;
}, (err: any) => {
  return Promise.reject(err);
});

export default apiRequest;