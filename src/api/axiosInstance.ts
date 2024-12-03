import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://3.133.138.29:8080/', // Replace with your API URL
  timeout: 10000, // Request timeout in ms
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors if needed (e.g., for adding auth tokens)
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: Add Authorization header if token exists
    const token = localStorage.getItem('token'); // Replace with your auth storage logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally (e.g., refresh token, logout)
    if (error.response?.status === 401) {
      console.error('Unauthorized - Redirect to login');
      // Handle logout or token refresh logic here
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
