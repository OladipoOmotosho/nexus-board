import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

/**
 * React hook to manage theme preference with:
 * - System theme detection and auto-sync
 * - LocalStorage persistence
 * - Cross-tab updates via the `storage` event
 * - Delayed application to avoid hydration mismatch
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  // --- apply theme when state changes ---
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (t: Theme) => {
      const effective =
        t === "system" ? (systemDark.matches ? "dark" : "light") : t;
      root.classList.remove("light", "dark");
      root.classList.add(effective);
    };

    applyTheme(theme);

    // Listen for system theme changes
    const systemListener = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        applyTheme(e.matches ? "dark" : "light");
      }
    };
    systemDark.addEventListener("change", systemListener);

    // Listen for localStorage changes (cross-tab sync)
    const storageListener = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) {
        const newTheme = e.newValue as Theme;
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };
    window.addEventListener("storage", storageListener);

    return () => {
      systemDark.removeEventListener("change", systemListener);
      window.removeEventListener("storage", storageListener);
    };
  }, [theme]);

  // --- setter with persistence ---
  const setThemePreference = (newTheme: Theme) => {
    try {
      localStorage.setItem("theme", newTheme);
    } catch {
      /* fallback for privacy modes */
    }
    setTheme(newTheme);
  };

  return { theme, setTheme: setThemePreference };
}
