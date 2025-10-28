# Routing Architecture Guide

This document explains the centralized routing system for the Nexus Board app.

## Overview

The app uses a **centralized, config-driven routing system** with:

- **Route constants** (`routes/constants.ts`) - No magic strings
- **Route types** (`routes/types.ts`) - Strong typing & role-based access control
- **Route guards** (`routes/guards.tsx`) - Authentication & authorization
- **Route config** (`routes/routes.config.ts`) - All routes defined in one place
- **Lazy loading** - Code splitting for better performance
- **Role-based access control (RBAC)** - Admin, User, Owner roles

## File Structure

```
src/
├── App.tsx                      # Main router (uses routes.config.ts)
├── layouts/
│   └── DashboardLayout.tsx      # Dashboard wrapper (Navbar + Sidebar + Outlet)
├── pages/
│   ├── landing/
│   │   └── LandingPage.tsx
│   ├── auth/
│   │   ├── SignIn.tsx
│   │   └── SignUp.tsx
│   ├── dashboard/
│   │   └── Dashboard.tsx
│   ├── tasks/
│   │   ├── TaskBoard.tsx
│   │   └── NewTaskModal.tsx
│   ├── calendar/
│   │   └── CalendarView.tsx
│   ├── analytics/
│   │   └── Analytics.tsx
│   ├── team/
│   │   └── Team.tsx
│   └── settings/
│       └── Settings.tsx
└── routes/
    ├── constants.ts            # Route path constants
    ├── types.ts                # Route interfaces & user roles
    ├── guards.tsx              # ProtectedRoute & auth logic
    └── routes.config.ts        # Centralized route definitions
```

## Usage

### 1. Add New Routes

Edit `src/routes/routes.config.ts`:

```typescript
// Add route path constant first
export const ROUTE_PATHS = {
  // ...existing...
  MY_NEW_PAGE: "/my-new-page",
};

// Create lazy-loaded component
const MyNewPage = lazy(() =>
  import("../pages/mynewpage/MyNewPage").then((m) => ({
    Component: m.MyNewPage,
  }))
);

// Add to appropriate route group
export const PUBLIC_ROUTES: AppRoute[] = [
  // ...existing...
  {
    path: ROUTE_PATHS.MY_NEW_PAGE,
    label: "My New Page",
    Component: MyNewPage,
    showInNav: true,
    order: 10,
    requiresAuth: false,
    allowedRoles: [],
    icon: "Settings",
    description: "Description here",
  },
];
```

### 2. Navigate Using Constants

Always use route constants in navigation to avoid typos:

```typescript
import { ROUTE_PATHS } from "../routes/constants";
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(ROUTE_PATHS.DASHBOARD)}>
      Go to Dashboard
    </button>
  );
}
```

### 3. Protect Routes (Role-Based)

Routes are automatically protected based on `requiresAuth` and `allowedRoles`:

```typescript
{
  path: ROUTE_PATHS.ANALYTICS,
  label: "Analytics",
  Component: Analytics,
  showInNav: true,
  requiresAuth: true,                    // ← Requires login
  allowedRoles: [UserRole.ADMIN],        // ← Admin only
  icon: "BarChart3",
}
```

If an unauthorized user tries to access, they're redirected to `/signin` (or dashboard if authenticated but wrong role).

### 4. Use Route Guards in Components

For fine-grained control within a component:

```typescript
import { useAuth, canAccessRoute } from "../routes/guards";
import { UserRole } from "../routes/types";

function MyComponent() {
  const auth = useAuth();

  // Check if user can access admin content
  if (!canAccessRoute(auth, true, [UserRole.ADMIN])) {
    return <div>Access denied</div>;
  }

  return <div>Admin content here</div>;
}
```

### 5. Add Auth Context (TODO)

Currently, `useAuth()` in `guards.tsx` is a stub. Connect it to your actual auth:

```typescript
// In guards.tsx, replace useAuth() implementation:
export const useAuth = (): AuthContext => {
  // TODO: Return from your auth context
  const authContext = useContext(AuthContext); // ← Your auth provider
  return authContext;
};
```

## Route Metadata

Each route supports:

```typescript
interface AppRoute {
  path?: string;                    // Route path
  label?: string;                   // Display name
  requiresAuth?: boolean;           // Requires login
  allowedRoles?: UserRole[];        // Allowed roles (ADMIN, USER, OWNER, GUEST)
  icon?: string;                    // Lucide icon name (for sidebars)
  showInNav?: boolean;              // Show in navigation menus
  order?: number;                   // Sort order (for sidebars)
  children?: AppRoute[];            // Nested child routes
  lazy?: () => Promise<...>;        // Lazy-load component
  description?: string;             // Route description
}
```

## User Roles

```typescript
enum UserRole {
  GUEST = "guest", // Unauthenticated user
  USER = "user", // Regular authenticated user
  ADMIN = "admin", // Admin (full access except owner-only)
  OWNER = "owner", // Owner (full access + billing, etc.)
}
```

## Building Navigation Menus

Use `getNavigableRoutes()` to build sidebars/navbars:

```typescript
import { getNavigableRoutes } from "../routes/routes.config";
import { useAuth } from "../routes/guards";

function Sidebar() {
  const auth = useAuth();
  const navRoutes = getNavigableRoutes(auth);

  return (
    <nav>
      {navRoutes.map((route) => (
        <a key={route.path} href={route.path}>
          {route.label}
        </a>
      ))}
    </nav>
  );
}
```

## Route Groups

### Public Routes

- Home (`/`)
- Sign In (`/signin`)
- Sign Up (`/signup`)

### Protected Routes (require auth + user role)

- Dashboard (`/dashboard`)
- Tasks (`/dashboard/tasks`)
- Calendar (`/dashboard/calendar`)
- Settings (`/dashboard/settings`)

### Admin Routes (require auth + admin role)

- Analytics (`/dashboard/analytics`) - Admin only
- Team (`/dashboard/team`) - Admin only

## Lazy Loading

All routes use code splitting with `lazy()`:

```typescript
const MyPage = lazy(() =>
  import("../pages/mypage/MyPage").then((m) => ({
    Component: m.MyPage,
  }))
);
```

This reduces initial bundle size. Loading state is shown in `RouteLoadingFallback`.

## Troubleshooting

### Route not showing up?

1. Check `path` is correct in `routes.config.ts`
2. Check `Component` is imported correctly
3. Check `requiresAuth` and `allowedRoles` match your user

### User can't access protected route?

1. Check `auth.isAuthenticated` is true
2. Check user's `auth.role` is in `allowedRoles`
3. Check `useAuth()` is connected to real auth context

### Types not matching?

1. Ensure all `AppRoute` objects have required properties
2. Check `UserRole` enum values are used (not strings)
3. Use TypeScript strict mode for better errors

## Next Steps

1. **Connect real auth context** - Replace stub `useAuth()` in `guards.tsx`
2. **Add more routes** - Follow pattern in `routes.config.ts`
3. **Customize guard logic** - Modify `checkAuthGuard()` and `checkRoleGuard()` if needed
4. **Build navigation UI** - Use `getNavigableRoutes()` to render sidebars/menus
5. **Add error boundaries** - Wrap routes with error handling

## Example: Adding a New Admin Page

```typescript
// 1. Add constant
export const ROUTE_PATHS = {
  ADMIN_DASHBOARD: "/admin/dashboard",
};

// 2. Create component
// src/pages/admin/AdminDashboard.tsx
export function AdminDashboard() {
  return <div>Admin Dashboard</div>;
}

// 3. Add to routes.config.ts
const AdminDashboard = lazy(() =>
  import("../pages/admin/AdminDashboard").then((m) => ({
    Component: m.AdminDashboard,
  }))
);

export const ADMIN_ROUTES: AppRoute[] = [
  {
    path: ROUTE_PATHS.ADMIN_DASHBOARD,
    label: "Admin Dashboard",
    Component: AdminDashboard,
    showInNav: true,
    order: 0,
    requiresAuth: true,
    allowedRoles: [UserRole.ADMIN, UserRole.OWNER],
    icon: "Shield",
    description: "Admin dashboard",
  },
];

// 4. Navigate
navigate(ROUTE_PATHS.ADMIN_DASHBOARD);
```

Done! Route is protected, lazy-loaded, and appears in nav menus for admins only.
