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
  activeView: string;
  onViewChange: (view: string) => void;
}

export function AppSidebar({ activeView, onViewChange }: AppSidebarProps) {
  const projects = [
    { id: "website", name: "Website Redesign", count: 12 },
    { id: "mobile", name: "Mobile App", count: 8 },
    { id: "marketing", name: "Marketing Campaign", count: 5 },
  ];

  return (
    <aside className="w-64 border-r border-sidebar-border bg-sidebar h-screen sticky top-0 flex flex-col">
      <div className="p-6">
        <div className="mb-6">
          <h3 className="mb-1">Workspace</h3>
          <p className="text-xs text-muted-foreground">Acme Inc.</p>
        </div>

        <div className="space-y-1">
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeView === "dashboard"}
            onClick={() => onViewChange("dashboard")}
          />
          <SidebarItem
            icon={Target}
            label="My Tasks"
            active={activeView === "tasks"}
            onClick={() => onViewChange("tasks")}
            count={23}
          />
          <SidebarItem
            icon={Calendar}
            label="Calendar"
            active={activeView === "calendar"}
            onClick={() => onViewChange("calendar")}
          />
          <SidebarItem
            icon={BarChart3}
            label="Analytics"
            active={activeView === "analytics"}
            onClick={() => onViewChange("analytics")}
          />
        </div>

        <Separator className="my-4" />

        <div className="mb-3">
          <h4 className="text-xs text-muted-foreground px-3 mb-2">PROJECTS</h4>
          <div className="space-y-1">
            {projects.map((project) => (
              <SidebarItem
                key={project.id}
                icon={FolderKanban}
                label={project.name}
                active={activeView === `project-${project.id}`}
                onClick={() => onViewChange(`project-${project.id}`)}
                count={project.count}
              />
            ))}
          </div>
        </div>

        <Separator className="my-4" />

        <div className="space-y-1">
          <SidebarItem
            icon={Users}
            label="Team"
            active={activeView === "team"}
            onClick={() => onViewChange("team")}
          />
          <SidebarItem
            icon={Settings}
            label="Settings"
            active={activeView === "settings"}
            onClick={() => onViewChange("settings")}
          />
        </div>
      </div>
    </aside>
  );
}
