"use client";

import { useEffect, useState } from "react";
import { ThemeSelector } from "@/components/Theme/ThemeSelector";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-border
        ${
          isScrolled
            ? "bg-background/50 backdrop-blur-sm shadow-sm "
            : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1
          className={`text-2xl font-bold transition-colors duration-200
          ${isScrolled ? "text-foreground" : ""}`}
        >
          Pomodoro Timer
        </h1>

        <div className="flex h-8 items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <a
              href=""
              className={`transition-colors duration-200 hover:underline
                ${isScrolled ? "text-foreground" : ""}`}
            >
              About
            </a>
            <div
              className={`transition-colors duration-200
              ${isScrolled ? "text-foreground" : ""}`}
            >
              |
            </div>
            <a
              href=""
              className={`transition-colors duration-200 hover:underline
                ${isScrolled ? "text-foreground" : ""}`}
            >
              GitHub
            </a>
          </div>
          <ThemeSelector />
        </div>
      </div>
    </header>
  );
}
