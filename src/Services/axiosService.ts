// axiosService.js
import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://jsonplaceholder.typicode.com', // Replace this with your API base URL
  timeout: 5000, // Adjust the timeout as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add authorization token or any other headers
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => {
        // You can modify the response data here
        delete response.config;
        delete response.headers;
        delete response.statusText;
        delete response.request;
    return response;
  },
  (error) => {
    // Handle error responses globally
    if (error.response) {
      // The request was made, but the server responded with a status code that falls out of the range of 2xx
      console.error('Response Error:', error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('Request Error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
