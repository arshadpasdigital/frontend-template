/**
 * Typed API client — powered by openapi-fetch + openapi-typescript.
 *
 * Every method (GET, POST, PUT, PATCH, DELETE) is fully typed from the
 * generated `schema.d.ts`. Path names, query params, request bodies,
 * and response bodies are all inferred — no manual casting needed.
 *
 * Usage:
 *   import { apiClient } from "@/api"
 *   const { data, error } = await apiClient.GET("/users/{id}", {
 *     params: { path: { id: "123" } },
 *   })
 */
import createClient from "openapi-fetch"
import type { paths } from "./schema"
import { env } from "@/config/env"
import { authMiddleware, errorMiddleware } from "./middleware"

export const apiClient = createClient<paths>({
  baseUrl: env.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
})

// Register middleware — order matters: auth runs first, then error handling.
apiClient.use(authMiddleware)
apiClient.use(errorMiddleware)

