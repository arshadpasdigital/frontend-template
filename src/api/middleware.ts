/**
 * Auth + global error middleware for openapi-fetch.
 *
 * Middleware runs on every request/response made by `apiClient`.
 * Add or remove middleware with:
 *   apiClient.use(myMiddleware)
 *   apiClient.eject(myMiddleware)
 */
import type { Middleware } from "openapi-fetch"

/**
 * Attaches the Bearer token from the auth store to every outgoing request.
 * Import useAuthStore lazily to avoid circular deps at module-init time.
 */
export const authMiddleware: Middleware = {
  async onRequest({ request }) {
    // Lazy import avoids a circular dependency at module init time.
    const { useAuthStore } = await import("@/features/auth/store/auth.store")
    const token = useAuthStore.getState().token

    if (token) {
      request.headers.set("Authorization", `Bearer ${token}`)
    }

    return request
  },
}

/**
 * Global response error handler.
 * Throw here to surface errors consistently in every feature's api file.
 */
export const errorMiddleware: Middleware = {
  async onResponse({ response }) {
    if (!response.ok) {
      // You can customise per-status here, e.g. redirect on 401.
      // if (response.status === 401) { ... }
      const body = await response.clone().text()
      throw new Error(`[API ${response.status}] ${body}`)
    }
    return response
  },
}

