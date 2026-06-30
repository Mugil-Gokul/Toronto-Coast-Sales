import axios from "axios";

const Api = axios.create({
  baseURL: "https://toronto-coast-sales-9ofv.vercel.app/",
  // http://localhost:5000/api
  
});

// Automatically attach JWT token
Api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default Api;