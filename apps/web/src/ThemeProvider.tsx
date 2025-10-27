import { ReactNode, useEffect } from "react";
import { useTheme } from "./hooks/useTheme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  // Apply the theme globally when this mounts
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    const preferred = systemDark.matches ? "dark" : "light";

    const mode = theme === "system" ? preferred : theme;
    root.classList.remove("light", "dark");
    root.classList.add(mode);
  }, [theme]);

  return <>{children}</>;
}
