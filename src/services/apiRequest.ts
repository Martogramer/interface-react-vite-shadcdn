import axios from "axios";
import { handleError } from "./handlers/errors/errorHandler";

const apiRequest = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

// Interceptor to include token in headers

apiRequest.interceptors.request.use(
  (response) => response,
  (error) => {
    handleError(error);
    return Promise.reject(error);
  }
);

export default apiRequest;
