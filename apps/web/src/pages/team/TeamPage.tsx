import { Navbar } from "../../components/layouts/Navbar";
import { AppSidebar } from "../AppSidebar";
import { Team } from "./Team";
import { useState } from "react";

export function TeamPage() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeToggle = () => setIsDark(!isDark);

  return (
    <>
      <Navbar onThemeToggle={handleThemeToggle} isDark={isDark} />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 min-h-[calc(100vh-73px)]">
          <Team />
        </main>
      </div>
    </>
  );
}
