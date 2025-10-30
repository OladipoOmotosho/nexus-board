import { Navigate, useLocation } from "react-router-dom";
import { AuthContext, UserRole } from "./types";
import { ROUTE_PATHS } from "./constants";

/**
 * Hook to get the current authentication state.
 * This should come from your auth context/provider.
 * For now, returning a stub. Update this to use your actual auth context.
 */
export const useAuth = (): AuthContext => {
  // TODO: Replace with actual auth context
  // Example: return useContext(AuthContext);
  return {
    // isAuthenticated: !!localStorage.getItem("authToken"),
    isAuthenticated: true,
    user: null,
    role: UserRole.ADMIN,
    loading: false,
  };
};

/**
 * Guard function to check if user is authenticated.
 * Returns null if allowed, or a redirect path if not.
 */
export const checkAuthGuard = (auth: AuthContext): string | null => {
  if (auth.isAuthenticated) {
    return null;
  }
  // Redirect to sign in if not authenticated
  return ROUTE_PATHS.SIGN_IN;
};

/**
 * Guard function to check role-based access.
 * Returns null if allowed, or a redirect path if not.
 */
export const checkRoleGuard = (
  auth: AuthContext,
  allowedRoles: UserRole[]
): string | null => {
  if (allowedRoles.length === 0) {
    // No role restrictions
    return null;
  }

  if (allowedRoles.includes(auth.role)) {
    return null;
  }

  // User doesn't have the required role; redirect to dashboard
  return ROUTE_PATHS.DASHBOARD;
};

/**
 * ProtectedRoute component for routes that require authentication.
 * Wraps a route element and checks auth before rendering.
 */
export interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  allowedRoles = [],
}) => {
  const auth = useAuth();
  const location = useLocation();

  // Check authentication
  const authResult = checkAuthGuard(auth);
  if (authResult !== null) {
    // Not authenticated; redirect to sign in and remember where they were
    return <Navigate to={authResult} state={{ from: location }} replace />;
  }

  // Check role-based access if roles are specified
  if (allowedRoles.length > 0) {
    const roleResult = checkRoleGuard(auth, allowedRoles);
    if (roleResult !== null) {
      // User doesn't have required role
      return <Navigate to={roleResult} replace />;
    }
  }

  // User is authenticated and has correct role
  return <>{children}</>;
};

/**
 * Higher-order component (HOC) to wrap a component with protection.
 * Usage: withProtection(MyComponent, [UserRole.USER, UserRole.ADMIN])
 */
export const withProtection = <P extends object>(
  Component: React.ComponentType<P>,
  allowedRoles?: UserRole[]
): React.FC<P> => {
  return (props: P) => (
    <ProtectedRoute allowedRoles={allowedRoles}>
      <Component {...props} />
    </ProtectedRoute>
  );
};

/**
 * Utility function to check if a user can access a route without rendering.
 * Useful for building navigation menus, conditionally rendering links, etc.
 */
export const canAccessRoute = (
  auth: AuthContext,
  requiresAuth: boolean,
  allowedRoles: UserRole[] = []
): boolean => {
  // Check authentication requirement
  if (requiresAuth && !auth.isAuthenticated) {
    return false;
  }

  // Check role requirement
  if (allowedRoles.length > 0 && !allowedRoles.includes(auth.role)) {
    return false;
  }

  return true;
};
