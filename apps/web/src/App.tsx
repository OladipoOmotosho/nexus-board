import { Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { Toaster, toast } from "sonner";
import { DashboardLayout } from "./layouts/DashboardLayout";
import {
  PUBLIC_ROUTES,
  FEATURE_ROUTES,
  PROTECTED_ROUTES,
  ADMIN_ROUTES,
} from "./routes/routes.config";
import { ROUTE_PATHS } from "./routes/constants";
import { ProtectedRoute } from "./routes/guards";
import { AppRoute, UserRole } from "./routes/types";
import { NewTaskModal } from "./pages/tasks/NewTaskModal";

// Loading fallback component
const RouteLoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

type TaskStatus = "todo" | "in-progress" | "done";

/**
 * Recursively render routes from route config.
 * Handles route protection and suspense boundaries.
 */
const renderRoutes = (routes: AppRoute[]): React.ReactNode[] => {
  return routes.map((route, idx) => {
    const element = route.Component ? (
      <Suspense fallback={<RouteLoadingFallback />}>
        <route.Component />
      </Suspense>
    ) : null;

    // Wrap protected routes with ProtectedRoute guard
    const wrappedElement =
      route.requiresAuth && element ? (
        <ProtectedRoute allowedRoles={route.allowedRoles}>
          {element}
        </ProtectedRoute>
      ) : (
        element
      );

    // Handle nested routes (children)
    if (route.children && route.children.length > 0) {
      return (
        <Route key={idx} path={route.path} element={wrappedElement}>
          {renderRoutes(route.children)}
        </Route>
      );
    }

    return (
      <Route
        key={idx}
        path={route.path}
        index={route.index}
        element={wrappedElement}
      />
    );
  });
};

function App() {
  const [isDark, setIsDark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskStatus] = useState<TaskStatus>("todo");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleThemeToggle = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-background">
      <Routes>
        {/* Public routes */}
        {renderRoutes(PUBLIC_ROUTES)}

        {/* Feature showcase routes */}
        {renderRoutes(FEATURE_ROUTES)}

        {/* Protected dashboard routes with layout */}
        <Route
          path={ROUTE_PATHS.DASHBOARD}
          element={
            <ProtectedRoute
              allowedRoles={[UserRole.USER, UserRole.ADMIN, UserRole.OWNER]}
            >
              <Suspense fallback={<RouteLoadingFallback />}>
                <DashboardLayout
                  onThemeToggle={handleThemeToggle}
                  isDark={isDark}
                />
              </Suspense>
            </ProtectedRoute>
          }
        >
          {/* Nested dashboard routes */}
          {PROTECTED_ROUTES[0]?.children &&
            renderRoutes(PROTECTED_ROUTES[0].children)}
        </Route>

        {/* Other protected routes (tasks, calendar, analytics, team, settings) */}
        {renderRoutes(PROTECTED_ROUTES.slice(1))}

        {/* Admin routes */}
        {renderRoutes(ADMIN_ROUTES)}

        {/* Catch-all 404 - must be last */}
        <Route
          path={ROUTE_PATHS.NOT_FOUND}
          element={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-muted-foreground mb-8">Page not found</p>
                <a
                  href={ROUTE_PATHS.HOME}
                  className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90"
                >
                  Go Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>

      {/* Global modals and toasters */}
      <NewTaskModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onCreateTask={() => toast.success("Task created!")}
        defaultStatus={newTaskStatus}
      />

      <Toaster />
    </div>
  );
}

export default App;
