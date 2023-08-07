import React, { PropsWithChildren, useState, useEffect } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { Theme, ThemeMode } from "./types";
import { useLocalTheme } from "./useLocalTheme";
import { createContext } from "../../utils/createContext";
import { saveToStorage } from "../../utils/storage";
import useThemeDetector from "./useThemeDetector";

const [useContext, Provider] = createContext<{
  theme: Theme;
  setTheme: (theme: Theme, mode?: ThemeMode) => void;
  mode: ThemeMode;
}>();

export const useTheme = useContext;

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { theme: localTheme, isLoaded } = useLocalTheme();
  const [theme, setTheme] = useState(localTheme);
  const currentMode: ThemeMode = useThemeDetector();

  useEffect(() => {
    if (isLoaded) {
      setTheme(localTheme);
    }
  }, [isLoaded, localTheme]);

  const setThemePreference = (theme: Theme, mode?: ThemeMode) => {
    if (mode) {
      saveToStorage(`${mode}-theme`, theme);
      if (currentMode === mode) {
        setTheme(theme);
      }
      return;
    }

    saveToStorage("dark-theme", theme);
    saveToStorage("light-theme", theme);
    setTheme(theme);
  };

  return (
    <SCThemeProvider theme={theme}>
      <Provider
        value={{ theme, setTheme: setThemePreference, mode: currentMode }}
      >
        {children}
      </Provider>
    </SCThemeProvider>
  );
};
