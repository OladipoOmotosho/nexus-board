import { lazy } from "react";
import { ROUTE_PATHS } from "./constants";
import { AppRoute, UserRole } from "./types";

/**
 * Lazy-loaded page components.
 * These are split into separate bundles for better performance.
 */
const LandingPage = lazy(() =>
  import("../pages/landing/LandingPage").then((m) => ({
    default: m.LandingPage,
  }))
);
const SignIn = lazy(() =>
  import("../pages/auth/SignIn").then((m) => ({ default: m.SignIn }))
);
const SignUp = lazy(() =>
  import("../pages/register/SignUp").then((m) => ({ default: m.SignUp }))
);
const DashboardLayout = lazy(() =>
  import("../layouts/DashboardLayout").then((m) => ({
    default: m.DashboardLayout,
  }))
);
const Dashboard = lazy(() =>
  import("../pages/dashboard/Dashboard").then((m) => ({ default: m.Dashboard }))
);
const TaskBoard = lazy(() =>
  import("../pages/tasks/TaskBoard").then((m) => ({ default: m.TaskBoard }))
);
const CalendarView = lazy(() =>
  import("../pages/calendar/CalendarView").then((m) => ({
    default: m.CalendarView,
  }))
);
const Analytics = lazy(() =>
  import("../pages/analytics/Analytics").then((m) => ({ default: m.Analytics }))
);
const Team = lazy(() =>
  import("../pages/team/Team").then((m) => ({ default: m.Team }))
);
const Settings = lazy(() =>
  import("../pages/settings/Settings").then((m) => ({ default: m.Settings }))
);

/**
 * Centralized route configuration for the entire app.
 * Organized by route type: public, protected, admin, etc.
 *
 * Usage:
 *   - Import PUBLIC_ROUTES, PROTECTED_ROUTES, ADMIN_ROUTES
 *   - Build React Router config from these (or use directly in <Routes>)
 *   - Use ROUTE_PATHS constants for navigation
 */

// ============================================================================
// PUBLIC ROUTES (no auth required)
// ============================================================================

export const PUBLIC_ROUTES: AppRoute[] = [
  {
    path: ROUTE_PATHS.HOME,
    label: "Home",
    Component: LandingPage,
    showInNav: false,
    order: 0,
    requiresAuth: false,
    allowedRoles: [],
    description: "Landing page for unauthenticated users",
  },
  {
    path: ROUTE_PATHS.SIGN_IN,
    label: "Sign In",
    Component: SignIn,
    showInNav: false,
    order: 1,
    requiresAuth: false,
    allowedRoles: [],
    description: "User sign-in page",
  },
  {
    path: ROUTE_PATHS.SIGN_UP,
    label: "Sign Up",
    Component: SignUp,
    showInNav: false,
    order: 2,
    requiresAuth: false,
    allowedRoles: [],
    description: "User registration page",
  },
];

// ============================================================================
// PROTECTED ROUTES (require authentication)
// ============================================================================

export const PROTECTED_ROUTES: AppRoute[] = [
  {
    path: ROUTE_PATHS.DASHBOARD,
    label: "Dashboard",
    Component: DashboardLayout,
    showInNav: true,
    order: 0,
    requiresAuth: true,
    allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
    icon: "LayoutDashboard",
    description: "Main dashboard layout (uses special layout rendering)",
    children: [
      {
        index: true,
        label: "Overview",
        Component: Dashboard,
        showInNav: false,
        order: 0,
        requiresAuth: true,
        allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
        description: "Dashboard overview",
      },
      {
        path: ROUTE_PATHS.TASKS,
        label: "Tasks",
        Component: TaskBoard,
        showInNav: true,
        order: 1,
        requiresAuth: true,
        allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
        icon: "CheckSquare",
        description: "Task management board",
      },
      {
        path: ROUTE_PATHS.CALENDAR,
        label: "Calendar",
        Component: CalendarView,
        showInNav: true,
        order: 2,
        requiresAuth: true,
        allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
        icon: "Calendar",
        description: "Calendar view",
      },
      {
        path: ROUTE_PATHS.ANALYTICS,
        label: "Analytics",
        Component: Analytics,
        showInNav: true,
        order: 3,
        requiresAuth: true,
        allowedRoles: [UserRole.ADMIN, UserRole.OWNER],
        icon: "BarChart3",
        description: "Analytics and reports (admin only)",
      },
      {
        path: ROUTE_PATHS.TEAM,
        label: "Team",
        Component: Team,
        showInNav: true,
        order: 4,
        requiresAuth: true,
        allowedRoles: [UserRole.ADMIN, UserRole.OWNER],
        icon: "Users",
        description: "Team management (admin only)",
      },
      {
        path: ROUTE_PATHS.SETTINGS,
        label: "Settings",
        Component: Settings,
        showInNav: true,
        order: 5,
        requiresAuth: true,
        allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
        icon: "Settings",
        description: "User settings",
      },
    ],
  },
];

// ============================================================================
// ADMIN ROUTES (require admin role)
// ============================================================================

export const ADMIN_ROUTES: AppRoute[] = [
  // Add admin-only routes here as needed
  // e.g., /admin, /admin/users, /admin/system-settings
];

// ============================================================================
// ALL ROUTES (combined)
// ============================================================================

export const ALL_ROUTES: AppRoute[] = [
  ...PUBLIC_ROUTES,
  ...PROTECTED_ROUTES,
  ...ADMIN_ROUTES,
  // Catch-all 404 route should be last
  {
    path: ROUTE_PATHS.NOT_FOUND,
    label: "Not Found",
    showInNav: false,
    order: 999,
    requiresAuth: false,
    allowedRoles: [],
  },
];

/**
 * Utility: Get all navigable routes (routes shown in sidebars, menus, etc.)
 */
export const getNavigableRoutes = (auth: any = null): AppRoute[] => {
  return ALL_ROUTES.filter((route) => {
    // Only include routes marked to show in nav
    if (!route.showInNav) return false;

    // If auth is provided, check access
    if (auth) {
      if (route.requiresAuth && !auth.isAuthenticated) return false;
      if (
        route.allowedRoles &&
        route.allowedRoles.length > 0 &&
        !route.allowedRoles.includes(auth.role)
      ) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
};
