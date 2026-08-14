// src/services/api.ts
import axios from "axios";

// Central Axios instance pointing at the Spring Boot backend.
// All requests made through `api` will be prefixed with this baseURL.
const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
