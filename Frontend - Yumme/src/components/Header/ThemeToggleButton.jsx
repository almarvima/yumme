import React from "react";
import { useTheme } from "../../contexts/ThemeContext.tsx";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

/**
 * ThemeToggleButton component - A component that toggles the theme of the website
 * @returns {JSX.Element} ThemeToggleButton component
 */
function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      className="border-2 max-w-max border-grey hover:bg-teal-500 dark:hover:bg-teal-800"
      variant={theme === "dark" ? "secondary" : "primary"}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Sun className="mr-1" /> : <Moon className="mr-1" />}{" "}
      Switch to {theme === "dark" ? "light" : "dark"} mode
    </Button>
  );
}

export default ThemeToggleButton;
