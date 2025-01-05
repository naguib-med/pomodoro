"use client";

import { useContext } from "react";
import { ThemeContext } from "@/lib/theme/context";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeSelector() {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" onClick={toggleMode}>
        {mode === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </Button>{" "}
    </div>
  );
}

export default ThemeSelector;
