import { useDashboardStore } from "./store/dashboard.store"
import { DashboardPage } from "./components/dashboard-page"
import type { DashboardItem } from "./types/dashboard.types"
import { fetchDashboardData } from "./api/dashboard.api"

export { useDashboardStore, DashboardPage, fetchDashboardData }
export type { DashboardItem }

