"use client";

import { useState, useEffect } from "react";
import { ThemeContext } from "@/lib/theme/context";
import { ThemeMode } from "@/lib/theme/types";

const MODE_KEY = "pomodoro-mode";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    const savedMode = localStorage.getItem(MODE_KEY);
    if (savedMode === "light" || savedMode === "dark") {
      setMode(savedMode);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", mode === "dark");

    localStorage.setItem(MODE_KEY, mode);
  }, [mode]);

  const toggleMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
