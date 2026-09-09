/**
 * Public API layer barrel.
 *
 * Import the typed client from here in every feature api file:
 *   import { apiClient } from "@/api"
 */
export { apiClient } from "./client"
export type { paths, components, operations } from "./schema"

