import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { LandingPage } from "./components/LandingPage";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Navbar } from "./components/Navbar";
import { AppSidebar } from "./components/AppSidebar";
import { Dashboard } from "./components/Dashboard";
import { ProjectHeader } from "./components/ProjectHeader";
import { TaskBoard, Task } from "./components/TaskBoard";
import { NewTaskModal } from "./components/NewTaskModal";
import { Toaster, toast } from "sonner";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [newTaskStatus, setNewTaskStatus] = useState<Task["status"]>("todo");
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleThemeToggle = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-background">
      <Routes>
        {/* Public routes */}
        <Route
          path="/"
          element={
            <LandingPage
              onGetStarted={() => navigate("/signup")}
              onSignIn={() => navigate("/signin")}
            />
          }
        />
        <Route
          path="/signin"
          element={<SignIn onSwitchToSignUp={() => navigate("/signup")} />}
        />
        <Route
          path="/signup"
          element={<SignUp onSwitchToSignIn={() => navigate("/signin")} />}
        />

        {/* Protected dashboard routes */}
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar onThemeToggle={handleThemeToggle} isDark={isDark} />
              <div className="flex">
                <AppSidebar />
                <main className="flex-1 min-h-[calc(100vh-73px)]">
                  <Dashboard />
                </main>
              </div>
            </>
          }
        />
      </Routes>

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
