import React, { useState, useEffect } from "react";
import { LandingPage } from "./components/LandingPage";
import { Navbar } from "./components/Navbar";
import { AppSidebar } from "./components/AppSidebar";
import { Dashboard } from "./components/Dashboard";
import { TaskBoard, Task } from "./components/TaskBoard";
import { ProjectHeader } from "./components/ProjectHeader";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { NewTaskModal } from "./components/NewTaskModal";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";

type View =
  | "landing"
  | "signin"
  | "signup"
  | "dashboard"
  | "tasks"
  | "calendar"
  | "analytics"
  | "team"
  | "settings"
  | string;

function App() {
  const [view, setView] = useState<View>("landing");
  const [isDark, setIsDark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskStatus, setNewTaskStatus] = useState<Task["status"]>("todo");
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Design new landing page",
      status: "todo",
      assignee: {
        name: "Sarah Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
      labels: ["Design", "High Priority"],
      dueDate: "Nov 15",
      priority: "high",
    },
    {
      id: "2",
      title: "Implement user authentication",
      status: "in-progress",
      assignee: {
        name: "Mike Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      },
      labels: ["Development"],
      dueDate: "Nov 10",
      priority: "high",
    },
    {
      id: "3",
      title: "Write API documentation",
      status: "in-progress",
      assignee: {
        name: "Emma Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      },
      labels: ["Documentation"],
      dueDate: "Nov 8",
      priority: "medium",
    },
    {
      id: "4",
      title: "Setup CI/CD pipeline",
      status: "done",
      assignee: {
        name: "Alex Brown",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      },
      labels: ["DevOps"],
      dueDate: "Nov 1",
      priority: "medium",
    },
    {
      id: "5",
      title: "Create mobile mockups",
      status: "todo",
      assignee: {
        name: "Sarah Chen",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      },
      labels: ["Design"],
      dueDate: "Nov 20",
      priority: "low",
    },
    {
      id: "6",
      title: "Database migration script",
      status: "done",
      assignee: {
        name: "Mike Johnson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      },
      labels: ["Backend"],
      dueDate: "Oct 28",
      priority: "high",
    },
  ]);

  const teamMembers = [
    {
      name: "Sarah Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      name: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    {
      name: "Emma Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    {
      name: "Alex Brown",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    },
    {
      name: "Lisa Park",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
    {
      name: "Tom Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
    },
  ];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  const handleTaskMove = (taskId: string, newStatus: Task["status"]) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
    toast.success("Task moved successfully");
  };

  const handleAddTask = (status: Task["status"]) => {
    setNewTaskStatus(status);
    setModalOpen(true);
  };

  const handleCreateTask = (newTask: Omit<Task, "id">) => {
    const task: Task = {
      ...newTask,
      id: Date.now().toString(),
    };
    setTasks([...tasks, task]);
    toast.success("Task created successfully");
  };

  const handleSignIn = (email: string, password: string) => {
    // Mock authentication
    console.log("Sign in:", email, password);
    toast.success("Welcome back!");
    setView("dashboard");
  };

  const handleSignUp = (name: string, email: string, password: string) => {
    // Mock registration
    console.log("Sign up:", name, email, password);
    toast.success("Account created successfully!");
    setView("dashboard");
  };

  // Landing page
  if (view === "landing") {
    return (
      <>
        <LandingPage
          onGetStarted={() => setView("signup")}
          onSignIn={() => setView("signin")}
        />
        <Toaster />
      </>
    );
  }

  // Auth views
  if (view === "signin") {
    return (
      <>
        <SignIn
          onSignIn={handleSignIn}
          onSwitchToSignUp={() => setView("signup")}
        />
        <Toaster />
      </>
    );
  }

  if (view === "signup") {
    return (
      <>
        <SignUp
          onSignUp={handleSignUp}
          onSwitchToSignIn={() => setView("signin")}
        />
        <Toaster />
      </>
    );
  }

  // Main app views
  return (
    <div className="min-h-screen bg-background">
      <Navbar onThemeToggle={handleThemeToggle} isDark={isDark} />

      <div className="flex">
        <AppSidebar activeView={view} onViewChange={setView} />

        <main className="flex-1 min-h-[calc(100vh-73px)]">
          {view === "dashboard" && <Dashboard />}

          {view.startsWith("project-") && (
            <>
              <ProjectHeader
                projectName={
                  view === "project-website"
                    ? "Website Redesign"
                    : view === "project-mobile"
                    ? "Mobile App"
                    : "Marketing Campaign"
                }
                members={teamMembers}
                onAddTask={() => handleAddTask("todo")}
              />
              <TaskBoard
                tasks={tasks}
                onTaskMove={handleTaskMove}
                onAddTask={handleAddTask}
              />
            </>
          )}

          {view === "tasks" && (
            <div className="p-8">
              <h1 className="mb-6">My Tasks</h1>
              <TaskBoard
                tasks={tasks}
                onTaskMove={handleTaskMove}
                onAddTask={handleAddTask}
              />
            </div>
          )}

          {view === "calendar" && (
            <div className="p-8">
              <h1 className="mb-4">Calendar View</h1>
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <p className="text-muted-foreground">
                  Calendar view coming soon...
                </p>
              </div>
            </div>
          )}

          {view === "analytics" && (
            <div className="p-8">
              <h1 className="mb-4">Analytics</h1>
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <p className="text-muted-foreground">
                  Analytics dashboard coming soon...
                </p>
              </div>
            </div>
          )}

          {view === "team" && (
            <div className="p-8">
              <h1 className="mb-4">Team</h1>
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <p className="text-muted-foreground">
                  Team management coming soon...
                </p>
              </div>
            </div>
          )}

          {view === "settings" && (
            <div className="p-8">
              <h1 className="mb-4">Settings</h1>
              <div className="bg-card border border-border rounded-lg p-12 text-center">
                <p className="text-muted-foreground">
                  Settings panel coming soon...
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      <NewTaskModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onCreateTask={handleCreateTask}
        defaultStatus={newTaskStatus}
      />

      <Toaster />
    </div>
  );
}

export default App;
