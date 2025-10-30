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
const TasksPage = lazy(() =>
  import("../pages/tasks/TasksPage").then((m) => ({ default: m.TasksPage }))
);
const CalendarPage = lazy(() =>
  import("../pages/calendar/CalendarPage").then((m) => ({
    default: m.CalendarPage,
  }))
);
const AnalyticsPage = lazy(() =>
  import("../pages/analytics/AnalyticsPage").then((m) => ({
    default: m.AnalyticsPage,
  }))
);
const TeamPage = lazy(() =>
  import("../pages/team/TeamPage").then((m) => ({ default: m.TeamPage }))
);
const SettingsPage = lazy(() =>
  import("../pages/settings/SettingsPage").then((m) => ({
    default: m.SettingsPage,
  }))
);

// Project pages
const ProjectWebsite = lazy(() =>
  import("../pages/projects/ProjectWebsite").then((m) => ({
    default: m.ProjectWebsite,
  }))
);
const ProjectMobile = lazy(() =>
  import("../pages/projects/ProjectMobile").then((m) => ({
    default: m.ProjectMobile,
  }))
);
const ProjectMarketing = lazy(() =>
  import("../pages/projects/ProjectMarketing").then((m) => ({
    default: m.ProjectMarketing,
  }))
);

// Feature components (lazy-loaded)
const TaskManagement = lazy(() =>
  import("../pages/landing/components/features/TaskManagements").then(
    (m: any) => ({
      default: (m &&
        (m.default ?? m.TaskManagement ?? m.TaskManagements)) as any,
    })
  )
);
const TeamCollaboration = lazy(() =>
  import("../pages/landing/components/features/TeamCollaboration").then(
    (m: any) => ({
      default: (m && (m.default ?? m.TeamCollaboration)) as any,
    })
  )
);
const ProjectBoards = lazy(() =>
  import("../pages/landing/components/features/ProjectBoards").then(
    (m: any) => ({
      default: (m && (m.default ?? m.ProjectBoards ?? m.ProjectBoardss)) as any,
    })
  )
);
const AnalyticsFeature = lazy(() =>
  import("../pages/landing/components/features/AnalyticsFeature").then(
    (m: any) => ({
      default: (m && (m.default ?? m.AnalyticsFeature)) as any,
    })
  )
);

/**
 * Centralized route configuration for the entire app.
 * Organized by route type: public, protected, admin, etc.
 *
 * Usage:
 *   - Import PUBLIC_ROUTES, PROTECTED_ROUTES, ADMIN_ROUTES, FEATURE_ROUTES
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
// FEATURE ROUTES (public feature showcase pages)
// ============================================================================

export const FEATURE_ROUTES: AppRoute[] = [
  {
    path: ROUTE_PATHS.FEATURE_TASK_MANAGEMENT,
    label: "Task Management",
    Component: TaskManagement,
    showInNav: false,
    order: 0,
    requiresAuth: false,
    allowedRoles: [],
    description: "Task management feature showcase",
  },
  {
    path: ROUTE_PATHS.FEATURE_TEAM_COLLABORATION,
    label: "Team Collaboration",
    Component: TeamCollaboration,
    showInNav: false,
    order: 1,
    requiresAuth: false,
    allowedRoles: [],
    description: "Team collaboration feature showcase",
  },
  {
    path: ROUTE_PATHS.FEATURE_PROJECT_BOARDS,
    label: "Project Boards",
    Component: ProjectBoards,
    showInNav: false,
    order: 2,
    requiresAuth: false,
    allowedRoles: [],
    description: "Project boards feature showcase",
  },
  {
    path: ROUTE_PATHS.FEATURE_ANALYTICS,
    label: "Analytics",
    Component: AnalyticsFeature,
    showInNav: false,
    order: 3,
    requiresAuth: false,
    allowedRoles: [],
    description: "Analytics feature showcase",
  },
];

// ============================================================================
// PROTECTED ROUTES (require authentication)
// NOTE: requiresAuth disabled until auth is implemented
// ============================================================================

export const PROTECTED_ROUTES: AppRoute[] = [
  {
    path: ROUTE_PATHS.DASHBOARD,
    label: "Dashboard",
    Component: DashboardLayout,
    showInNav: true,
    order: 0,
    requiresAuth: false,
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
        requiresAuth: false,
        allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
        description: "Dashboard overview",
      },
    ],
  },
  {
    path: ROUTE_PATHS.TASKS,
    label: "Tasks",
    Component: TasksPage,
    showInNav: true,
    order: 1,
    requiresAuth: false,
    allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
    icon: "CheckSquare",
    description: "Task management board",
  },
  {
    path: ROUTE_PATHS.CALENDAR,
    label: "Calendar",
    Component: CalendarPage,
    showInNav: true,
    order: 2,
    requiresAuth: false,
    allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
    icon: "Calendar",
    description: "Calendar view",
  },
  {
    path: ROUTE_PATHS.ANALYTICS,
    label: "Analytics",
    Component: AnalyticsPage,
    showInNav: true,
    order: 3,
    requiresAuth: false,
    allowedRoles: [UserRole.ADMIN, UserRole.OWNER],
    icon: "BarChart3",
    description: "Analytics and reports",
  },
  {
    path: ROUTE_PATHS.TEAM,
    label: "Team",
    Component: TeamPage,
    showInNav: true,
    order: 4,
    requiresAuth: false,
    allowedRoles: [UserRole.ADMIN, UserRole.OWNER],
    icon: "Users",
    description: "Team management",
  },
  {
    path: ROUTE_PATHS.SETTINGS,
    label: "Settings",
    Component: SettingsPage,
    showInNav: true,
    order: 5,
    requiresAuth: false,
    allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
    icon: "Settings",
    description: "User settings",
  },
  {
    path: ROUTE_PATHS.PROJECT_WEBSITE,
    label: "Website Redesign",
    Component: ProjectWebsite,
    showInNav: false,
    order: 6,
    requiresAuth: false,
    allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
    description: "Website redesign project",
  },
  {
    path: ROUTE_PATHS.PROJECT_MOBILE,
    label: "Mobile App",
    Component: ProjectMobile,
    showInNav: false,
    order: 7,
    requiresAuth: false,
    allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
    description: "Mobile app project",
  },
  {
    path: ROUTE_PATHS.PROJECT_MARKETING,
    label: "Marketing Campaign",
    Component: ProjectMarketing,
    showInNav: false,
    order: 8,
    requiresAuth: false,
    allowedRoles: [UserRole.USER, UserRole.ADMIN, UserRole.OWNER],
    description: "Marketing campaign project",
  },
];

// ============================================================================
// ADMIN ROUTES (require admin role)
// ============================================================================

export const ADMIN_ROUTES: AppRoute[] = [
  // Add admin-only routes here as needed
];

// ============================================================================
// ALL ROUTES (combined)
// ============================================================================

export const ALL_ROUTES: AppRoute[] = [
  ...PUBLIC_ROUTES,
  ...FEATURE_ROUTES,
  ...PROTECTED_ROUTES,
  ...ADMIN_ROUTES,
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
    if (!route.showInNav) return false;
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
