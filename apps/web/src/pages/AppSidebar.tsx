import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
  Calendar,
  Target,
  BarChart3,
} from "lucide-react";
import { SidebarItem } from "../components/layouts/SidebarItem";
import { Separator } from "../components/reusableComponents/separator";
import { NavLink } from "react-router-dom";
import { ROUTE_PATHS } from "../routes/constants";

export function AppSidebar() {
  const projects = [
    { id: ROUTE_PATHS.PROJECT_WEBSITE, name: "Website Redesign", count: 12 },
    { id: ROUTE_PATHS.PROJECT_MOBILE, name: "Mobile App", count: 8 },
    {
      id: ROUTE_PATHS.PROJECT_MARKETING,
      name: "Marketing Campaign",
      count: 5,
    },
  ];

  const mainNav = [
    { to: ROUTE_PATHS.DASHBOARD, icon: LayoutDashboard, label: "Dashboard" },
    { to: ROUTE_PATHS.TASKS, icon: Target, label: "My Tasks", count: 23 },
    { to: ROUTE_PATHS.CALENDAR, icon: Calendar, label: "Calendar" },
    { to: ROUTE_PATHS.ANALYTICS, icon: BarChart3, label: "Analytics" },
  ];

  const miscNav = [
    { to: ROUTE_PATHS.TEAM, icon: Users, label: "Team" },
    { to: ROUTE_PATHS.SETTINGS, icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="w-64 border-r border-sidebar-border bg-sidebar h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="mb-1">Workspace</h3>
          <p className="text-xs text-muted-foreground">Acme Inc.</p>
        </div>

        {/* Main Navigation */}
        <div className="space-y-1">
          {mainNav.map((item) => (
            <NavLink key={item.to} to={item.to} className="block">
              {({ isActive }) => (
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  active={isActive}
                  count={item.count}
                />
              )}
            </NavLink>
          ))}
        </div>

        <Separator className="my-4" />

        {/* Projects */}
        <div className="mb-3">
          <h4 className="text-xs text-muted-foreground px-3 mb-2">PROJECTS</h4>
          <div className="space-y-1">
            {projects.map((project) => (
              <NavLink key={project.id} to={project.id} className="block">
                {({ isActive }) => (
                  <SidebarItem
                    icon={FolderKanban}
                    label={project.name}
                    active={isActive}
                    count={project.count}
                  />
                )}
              </NavLink>
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Misc */}
        <div className="space-y-1">
          {miscNav.map((item) => (
            <NavLink key={item.to} to={item.to} className="block">
              {({ isActive }) => (
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  active={isActive}
                />
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </aside>
  );
}
