/**
 * Auth feature — API calls.
 *
 * All paths and types below are inferred from the generated schema.
 * After running `bun run generate:types`, replace the stub types with
 * the real inferred types from `@/api`.
 *
 * Example (once schema is generated):
 *   const { data, error } = await apiClient.POST("/auth/login", {
 *     body: credentials,  // typed from components.schemas.LoginCredentials
 *   })
 */
import { apiClient } from "@/api"

export type LoginCredentials = {
  email: string
  password: string
}

export async function loginApi(credentials: LoginCredentials) {
  // Replace "/auth/login" with the exact path from your OpenAPI spec.
  // Once schema.d.ts is generated, `body` and the return type are fully typed.
  const { data, error } = await apiClient.POST("/auth/login" as never, {
    body: credentials as never,
  })

  if (error) throw error
  return data as { token: string }
}

export async function logoutApi() {
  const { error } = await apiClient.POST("/auth/logout" as never, {})
  if (error) throw error
}
