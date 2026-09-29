import axios from "axios"
import { env } from "@/config/env"

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
})

// Request interceptor — attach auth token
apiClient.interceptors.request.use((config) => {
  // e.g. const token = useAuthStore.getState().token
  // if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

// Response interceptor — global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 / 403 globally here
    return Promise.reject(error)
  },
)

