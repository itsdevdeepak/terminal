import React from "react";
import { getFromStorage } from "../../utils/storage";
import { ThemeName, Themes } from "../../context/Theme";
import { getThemeNames } from "../../utils/config";
import { Helper } from "./types";

const Theme = (args: string[], helper: Helper) => {
  const themeNames = getThemeNames();
  const themes = getFromStorage("all-themes") as Themes;
  const { setTheme } = helper.theme;

  if (args.length < 1 && args.length > 2) {
    return <p>theme: {args}: is not theme option</p>;
  }

  if (args[0] === "list")
    return (
      <p>
        {themeNames.map((theme) => (
          <>
            {theme}
            <br />
          </>
        ))}
      </p>
    );

  if (themeNames.includes(args[0].toLowerCase())) {
    const newTheme = themes.data[args[0] as ThemeName];
    setTheme(newTheme);
    return <p>Theme is changed to {args[0]}</p>;
  }

  return <p>theme: {args}: is not theme option</p>;
};

export default Theme;
