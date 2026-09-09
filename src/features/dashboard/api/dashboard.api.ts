/**
 * Dashboard feature — API calls.
 *
 * All paths and types below are inferred from the generated schema.
 * After running `bun run generate:types`, replace the stub types with
 * the real inferred types from `@/api`.
 *
 * Example (once schema is generated):
 *   const { data, error } = await apiClient.GET("/dashboard", {
 *     params: { query: { page: 1 } }, // typed from the spec
 *   })
 */
import { apiClient } from "@/api"

export async function fetchDashboardData() {
  // Replace "/dashboard" with the exact path from your OpenAPI spec.
  const { data, error } = await apiClient.GET("/dashboard" as never)

  if (error) throw error
  return data
}
