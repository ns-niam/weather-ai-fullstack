import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

console.log("Backend URL:", BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;