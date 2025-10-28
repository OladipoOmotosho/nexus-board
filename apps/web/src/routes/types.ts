import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";

/**
 * User roles for role-based access control (RBAC).
 */
export enum UserRole {
  GUEST = "guest",
  USER = "user",
  ADMIN = "admin",
  OWNER = "owner",
}

/**
 * Authentication context type.
 * Extend this as needed with user profile, permissions, etc.
 */
export interface AuthContext {
  isAuthenticated: boolean;
  user: User | null;
  role: UserRole;
  loading: boolean;
}

/**
 * User data type.
 */
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
}

/**
 * Extended RouteObject with custom properties for our app.
 * Includes authentication requirements, role-based access, metadata, etc.
 */
export interface AppRoute extends Omit<RouteObject, "children"> {
  /** Route display name (for breadcrumbs, menus, etc.) */
  label?: string;

  /** Whether this route requires authentication */
  requiresAuth?: boolean;

  /** Roles that can access this route (if requiresAuth is true) */
  allowedRoles?: UserRole[];

  /** Icon for sidebar/menu (Lucide icon name as string) */
  icon?: string;

  /** Whether to show this route in navigation menus */
  showInNav?: boolean;

  /** Breadcrumb/navigation order */
  order?: number;

  /** Child routes (nested) */
  children?: AppRoute[];

  /** Lazy-loaded component (dynamic import) - accepts any React component */
  Component?: React.ComponentType<any>;

  /** Description for documentation */
  description?: string;
}

/**
 * Guard function type: returns boolean (allowed) or redirect path.
 */
export type GuardFn = (auth: AuthContext) => boolean | string;

/**
 * Route metadata type for building breadcrumbs, navigation, etc.
 */
export interface RouteMetadata {
  path: string;
  label: string;
  icon?: string;
  showInNav: boolean;
  order: number;
  requiresAuth: boolean;
  allowedRoles: UserRole[];
}

/**
 * Auth state from a provider (context or hook).
 * This should be provided by your auth context/hook.
 */
export interface IAuthProvider {
  auth: AuthContext;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
}
