import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Proxy will forward to http://localhost:5000/api
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export default api;