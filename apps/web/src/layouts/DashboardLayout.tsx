import { Outlet } from "react-router-dom";
import { Navbar } from "../components/layouts/Navbar";
import { AppSidebar } from "../pages/AppSidebar";

interface DashboardLayoutProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

export function DashboardLayout({
  onThemeToggle,
  isDark,
}: DashboardLayoutProps) {
  return (
    <>
      <Navbar onThemeToggle={onThemeToggle} isDark={isDark} />
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 min-h-[calc(100vh-73px)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}
