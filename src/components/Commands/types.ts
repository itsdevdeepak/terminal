import { ConsoleAction } from "../../context/Shell/Console";
import { HistoryAction } from "../../context/Shell/History";
import { Theme, ThemeMode } from "../../context/Theme";

export type Helper = {
  theme: {
    theme: Theme;
    setTheme: (theme: Theme, mode?: ThemeMode | undefined) => void;
  };
  history: {
    history: string[];
    historyDispatch: React.Dispatch<HistoryAction>;
  };
  console: {
    console: JSX.Element[];
    consoleDispatch: React.Dispatch<ConsoleAction>;
  };
};
