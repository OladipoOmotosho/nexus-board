import { useState, useEffect } from "react";
import { Search, Moon, Sun, Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface NavbarProps {
  onThemeToggle: () => void;
  isDark: boolean;
}

export function Navbar({ onThemeToggle, isDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 border-b transition-all"
      style={{
        backgroundColor: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
        borderColor: "var(--nav-border)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 flex-1">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-lg bg-linear-to-br from-hero-gradient-from to-hero-gradient-via flex items-center justify-center">
                <span className="text-white font-semibold">N</span>
              </div>
              <span className="font-semibold">Nexus Board</span>
            </div>

            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks, projects, or people..."
                className="pl-10 bg-input-background border-border"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={onThemeToggle}>
              {isDark ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </Button>

            <Button variant="ghost" size="icon">
              <Bell className="size-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="size-8">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
