import {
  LayoutDashboard,
  FolderKanban,
  Users,
  Settings,
  Calendar,
  Target,
  BarChart3,
} from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { Separator } from "./ui/separator";

interface AppSidebarProps {
  activeView?: string;
  onViewChange?: (view: string) => void;
}

export function AppSidebar({ activeView, onViewChange }: AppSidebarProps) {
  const projects = [
    { id: "website", name: "Website Redesign", count: 12 },
    { id: "mobile", name: "Mobile App", count: 8 },
    { id: "marketing", name: "Marketing Campaign", count: 5 },
  ];

  // safe wrapper for undefined handler
  const handleChange = (view: string) => {
    if (onViewChange) {
      onViewChange(view);
    } else {
      console.warn(`onViewChange not provided for view: ${view}`);
    }
  };

  return (
    <aside className="w-64 border-r border-sidebar-border bg-sidebar h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="mb-1">Workspace</h3>
          <p className="text-xs text-muted-foreground">Acme Inc.</p>
        </div>

        {/* Main navigation */}
        <div className="space-y-1">
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeView === "dashboard"}
            onClick={() => handleChange("dashboard")}
          />
          <SidebarItem
            icon={Target}
            label="My Tasks"
            active={activeView === "tasks"}
            onClick={() => handleChange("tasks")}
            count={23}
          />
          <SidebarItem
            icon={Calendar}
            label="Calendar"
            active={activeView === "calendar"}
            onClick={() => handleChange("calendar")}
          />
          <SidebarItem
            icon={BarChart3}
            label="Analytics"
            active={activeView === "analytics"}
            onClick={() => handleChange("analytics")}
          />
        </div>

        <Separator className="my-4" />

        {/* Projects */}
        <div className="mb-3">
          <h4 className="text-xs text-muted-foreground px-3 mb-2">PROJECTS</h4>
          <div className="space-y-1">
            {projects.map((project) => (
              <SidebarItem
                key={project.id}
                icon={FolderKanban}
                label={project.name}
                active={activeView === `project-${project.id}`}
                onClick={() => handleChange(`project-${project.id}`)}
                count={project.count}
              />
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        {/* Team & Settings */}
        <div className="space-y-1">
          <SidebarItem
            icon={Users}
            label="Team"
            active={activeView === "team"}
            onClick={() => handleChange("team")}
          />
          <SidebarItem
            icon={Settings}
            label="Settings"
            active={activeView === "settings"}
            onClick={() => handleChange("settings")}
          />
        </div>
      </div>
    </aside>
  );
}
