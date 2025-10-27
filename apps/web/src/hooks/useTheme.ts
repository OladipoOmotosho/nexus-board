import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "system"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    const applyTheme = (mode: "light" | "dark") => {
      root.classList.remove("light", "dark");
      root.classList.add(mode);
    };

    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(e.matches ? "dark" : "light");
      }
    };

    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
    const preferred = systemDark.matches ? "dark" : "light";

    if (theme === "system") {
      applyTheme(preferred);
    } else {
      applyTheme(theme);
    }

    systemDark.addEventListener("change", handleSystemChange);
    return () => systemDark.removeEventListener("change", handleSystemChange);
  }, [theme]);

  const setThemePreference = (newTheme: Theme) => {
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return { theme, setTheme: setThemePreference };
}
