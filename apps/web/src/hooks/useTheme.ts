import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

/**
 * useTheme
 *
 * React hook that manages a user's theme preference and synchronizes it with
 * the document root and other browser contexts (e.g. other tabs).
 *
 * Behavior:
 * - Initializes theme from localStorage under the key "theme", falling back to
 *   "system" when no value is present or when running in a non-browser (SSR)
 *   environment.
 * - Applies the effective theme to document.documentElement by adding either
 *   the "light" or "dark" class. If the stored preference is "system", the
 *   effective theme follows the OS preference determined via
 *   window.matchMedia("(prefers-color-scheme: dark)").
 * - Subscribes to:
 *   - the system color-scheme change event (matchMedia change) to update the
 *     applied theme when the OS preference changes (only when the preference
 *     is "system"),
 *   - the window "storage" event to react to theme changes made in other
 *     tabs and synchronize the local state and document class.
 * - Cleans up all event listeners on unmount.
 * - Exposes a setter which persists the chosen preference to localStorage. The
 *   write is wrapped in try/catch to tolerate privacy modes or browsers that
 *   block storage access.
 *
 * Notes:
 * - This hook is safe to call during server-side rendering: it will return
 *   "system" as the initial value when window is undefined and will not access
 *   DOM APIs until running in the browser.
 * - The hook returns a minimal API: { theme, setTheme } where `theme` is the
 *   stored preference (for example "light" | "dark" | "system") and `setTheme`
 *   persists and applies a new preference.
 *
 * @remarks
 * - Intended to be used inside React function components.
 * - The hook mutates the document.documentElement classes directly; ensure your
 *   CSS reads these classes (e.g. .light and .dark) to apply theming.
 *
 * @returns An object with:
 * - `theme`: the current theme preference (e.g. "light" | "dark" | "system").
 * - `setTheme`: function to update the preference and persist it to localStorage.
 *
 * @example
 * // In a React component:
 * // const { theme, setTheme } = useTheme();
 * // setTheme("dark");
 *
 */

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
  const getThemeTitle = () => {
    switch (theme) {
      case "light":
        return "Switch to dark mode";
      case "dark":
        return "Switch to auto (system) mode";
      case "system":
        return "Switch to light mode";
      default:
        return "Toggle theme";
    }
  };

  return { theme, setTheme: setThemePreference, getThemeTitle };
}
