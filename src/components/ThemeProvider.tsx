"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Always start with false for SSR consistency
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Check saved theme preference after mount
    const saved =
      sessionStorage.getItem("preserveTheme") ??
      localStorage.getItem("darkMode");

    let isDark = false;
    if (saved !== null) {
      isDark = JSON.parse(saved);
    } else {
      // Check if script set the data-theme attribute
      isDark = document.documentElement.getAttribute("data-theme") === "dark";
    }

    setIsDarkMode(isDark);
    // Apply the theme class after hydration
    document.documentElement.classList.toggle("dark", isDark);
    // Clean up the data attribute
    document.documentElement.removeAttribute("data-theme");

    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode, isMounted]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Don't render children until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <ThemeContext.Provider value={{ isDarkMode: false, toggleDarkMode }}>
        <div style={{ opacity: 0, pointerEvents: "none" }}>{children}</div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
