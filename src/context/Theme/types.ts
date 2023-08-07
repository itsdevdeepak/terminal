import { getThemeNames } from "../../utils/config";

export type Theme = {
  id: string;
  name: string;
  foreground: string;
  background: string;
  selectionForeground: string;
  selectionBackground: string;
  cursorColor: string;
  borderColor: string;
  black: string;
  white: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
};

export type ThemeName = "catppuccin-mocha" | "catppuccin-latte";

export type Themes = {
  data: {
    [Key in ThemeName]: Theme;
  };
};

export type ThemeMode = "light" | "dark";

export type ThemePreference = {
  light?: Theme;
  dark?: Theme;
};

export const isValidThemeName = (themeName: string): themeName is ThemeName => {
  const validNames = getThemeNames();
  if (themeName in validNames) {
    return true;
  }
  return false;
};
