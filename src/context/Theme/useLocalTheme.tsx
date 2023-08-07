import { useEffect, useState } from "react";
import { getFromStorage, saveToStorage } from "../../utils/storage";
import { Themes } from "./types";
import useThemeDetector from "./useThemeDetector";

export const useLocalTheme = () => {
  const themes = getFromStorage("all-themes") as Themes;
  const initialTheme = themes.data["catppuccin-mocha"];
  const darkTheme = getFromStorage("dark-theme");
  const lightTheme = getFromStorage("light-theme");

  const [theme, setTheme] = useState(initialTheme);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentMode = useThemeDetector();

  useEffect(() => {
    const localTheme = currentMode === "dark" ? darkTheme : lightTheme;
    if (!isLoaded) {
      if (localTheme) {
        setTheme(localTheme);
        setIsLoaded(true);
      } else {
        saveToStorage("dark-theme", theme);
        saveToStorage("light-theme", theme);
      }

      setIsLoaded(true);
    }
  }, [currentMode, darkTheme, isLoaded, lightTheme, theme]);

  return { theme, isLoaded };
};
