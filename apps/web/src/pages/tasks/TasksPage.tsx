import { Navbar } from "../../components/layouts/Navbar";
import { AppSidebar } from "../AppSidebar";
import { TaskBoard } from "./TaskBoard";
import { useState } from "react";

export function TasksPage() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => setIsDark(!isDark);

  return (
    <>
      <Navbar onThemeToggle={handleThemeToggle} isDark={isDark} />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 min-h-[calc(100vh-73px)]">
          <TaskBoard />
        </main>
      </div>
    </>
  );
}
