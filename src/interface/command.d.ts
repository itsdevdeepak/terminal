type CommandName = "help" | "echo" | "banner" | "repo";

type Command = {
  name: CommandName;
  description: string;
  component: (args: string[]) => JSX.Element;
};

type Commands = { [key: string]: Command };
