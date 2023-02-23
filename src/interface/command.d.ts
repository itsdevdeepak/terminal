type CommandName =
  | "help"
  | "echo"
  | "banner"
  | "repo"
  | "projects"
  | "clear"
  | "about"
  | "whoami";

type Command = {
  name: CommandName;
  description: string;
  component: (args: string[]) => JSX.Element;
};

type Commands = { [key: string]: Command };
