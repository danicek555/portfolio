"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) {
    return (
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50 bg-gray-800 text-white"
        style={{ opacity: 0, pointerEvents: "none" }}
        aria-label="Theme toggle"
      >
        <Moon className="w-6 h-6" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={clsx(
        "fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50",
        isDarkMode
          ? "bg-yellow-500 hover:bg-yellow-400 text-gray-900"
          : "bg-gray-800 hover:bg-gray-700 text-white"
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}
