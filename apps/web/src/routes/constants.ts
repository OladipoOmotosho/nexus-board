/**
 * Route path constants to avoid magic strings throughout the app.
 * Use these instead of hardcoded paths in navigation, links, and redirects.
 */

export const ROUTE_PATHS = {
  // Public routes
  HOME: "/",
  SIGN_IN: "/sign_in",
  SIGN_UP: "/sign_up",

  // Protected routes (dashboard layout)
  DASHBOARD: "/dashboard",
  TASKS: "/tasks",
  CALENDAR: "/calendar",
  ANALYTICS: "/analytics",
  TEAM: "/team",
  SETTINGS: "/settings",

  // Projects
  PROJECT_WEBSITE: "/projects/website",
  PROJECT_MOBILE: "/projects/mobile",
  PROJECT_MARKETING: "/projects/marketing",

  // Admin routes
  ADMIN: "/admin",
  ADMIN_USERS: "/admin/users",
  ADMIN_SETTINGS: "/admin/settings",

  // Feature routes
  FEATURE_TASK_MANAGEMENT: "/features/task-management",
  FEATURE_TEAM_COLLABORATION: "/features/team-collaboration",
  FEATURE_PROJECT_BOARDS: "/features/project-boards",
  FEATURE_ANALYTICS: "/features/analytics",

  //solutions  SOLUTIONS_STARTUPS:
  SOLUTIONS_STARTUPS: "/solutions/startups",
  SOLUTIONS_ENTERPRISE: "/solutions/enterprise",
  SOLUTIONS_REMOTE: "/solutions/remote",
  SOLUTIONS_AGENCIES: "/solutions/agencies",

  // Catch-all / Not Found
  NOT_FOUND: "*",
} as const;

/**
 * Convenience function to get all public routes
 */
export const getPublicRoutes = () =>
  [ROUTE_PATHS.HOME, ROUTE_PATHS.SIGN_IN, ROUTE_PATHS.SIGN_UP] as const;

/**
 * Convenience function to get all protected routes
 */
export const getProtectedRoutes = () =>
  [
    ROUTE_PATHS.DASHBOARD,
    ROUTE_PATHS.TASKS,
    ROUTE_PATHS.CALENDAR,
    ROUTE_PATHS.ANALYTICS,
    ROUTE_PATHS.TEAM,
    ROUTE_PATHS.SETTINGS,
  ] as const;

/**
 * Convenience function to get all admin routes
 */
export const getAdminRoutes = () =>
  [
    ROUTE_PATHS.ADMIN,
    ROUTE_PATHS.ADMIN_USERS,
    ROUTE_PATHS.ADMIN_SETTINGS,
  ] as const;
