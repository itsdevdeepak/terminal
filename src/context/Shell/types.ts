export type ShellStatus = "Success" | "Interrupted" | "Error" | "History";

export type ShellOutput = {
  output: string;
  status: ShellStatus;
};
