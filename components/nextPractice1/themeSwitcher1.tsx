import React from "react";
import { useTheme } from "@/context/next-practice-1/ThemeContext1";
import Button1 from "./button1";

const ThemeSwitcher1 = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button1
      onClick={toggleTheme}
      size="medium"
      color="primary"
      isLoading={false}
      disabled={false}
      className="w-auto"
    >
      Switch to {theme === "light" ? "dark" : "light"}
    </Button1>
  );
};

export default ThemeSwitcher1;
