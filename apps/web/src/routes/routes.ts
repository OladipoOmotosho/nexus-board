// lightweight local RouteConfig and helper to avoid depending on a missing package
type RouteConfig = {
  name: string;
  path: string;
  // add other fields here if other parts of the app expect them
};

function route(name: string, path: string): RouteConfig {
  return { name, path };
}

export default [
  route("Dashboard", "../pages/dashboard/Dashboard.tsx"),
  route("Tasks", "../pages/tasks/TaskBoard.tsx"),
  route("Calendar", "../pages/calendar/CalendarView.tsx"),
  route("Analytics", "../pages/analytics/Analytics.tsx"),
  route("Team", "../pages/team/Team.tsx"),
  route("Settings", "../pages/settings/Settings.tsx"),
  route("ProjectBoard", "../pages/project/ProjectBoard.tsx"),
];
