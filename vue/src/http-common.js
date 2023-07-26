import axios from "axios";

const http = axios.create({
  baseURL: "https://canseo.site/api/api",
  headers: {
    "Content-type": "application/json"
  }
});

http.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Authorization");
    if (token) {
      config.headers.common["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
