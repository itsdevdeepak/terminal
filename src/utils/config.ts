import config from "../config/config.json";
import themes from "../config/themes.json";
export const getConfig = () => {
  return config;
};

export const getAllThemes = () => {
  return themes;
};

export const validTheme = (
  themeName: string
): themeName is keyof typeof themes => {
  const themes = getAllThemes();
  if (!(themeName in themes)) return false;
  return true;
};

export const getCurrentTheme = () => {
  let themeName = localStorage.getItem("theme") ?? "";
  if (!validTheme(themeName)) {
    themeName = config.theme;
    if (!validTheme(themeName))
      throw new Error("Please defined valid theme name in your config");
  }
  return themes[themeName];
};

export const getValidThemeNames = () => {
  const validThemes: string[] = [];
  for (const theme in themes) {
    validThemes.push(theme);
  }
  return validThemes;
};
