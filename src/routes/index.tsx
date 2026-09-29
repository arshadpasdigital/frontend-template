import { createFileRoute } from "@tanstack/react-router"
import { Suspense, lazy } from "react"
import { RouteErrorBoundary } from "@/error-boundaries"

// Lazy-load the page component — Suspense above handles the fallback
const HomePage = lazy(() =>
  import("@/features/home/components/home-page").then((m) => ({ default: m.HomePage })),
)

export const Route = createFileRoute("/")({
  component: IndexPage,
})

function IndexPage() {
  return (
    <RouteErrorBoundary>
      <Suspense fallback={<div>Loading home…</div>}>
        <HomePage />
      </Suspense>
    </RouteErrorBoundary>
  )
}

