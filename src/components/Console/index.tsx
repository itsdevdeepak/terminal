import React, { useEffect } from "react";
import { useShell } from "../../context/Shell/ShellProvider";

const Console = () => {
  const { console, executeCommand } = useShell();

  useEffect(() => {
    executeCommand("banner");
    return () => {
      executeCommand("clear");
    };
  }, []);

  return (
    <div>
      {console.map((command, idx) => {
        return <div key={idx}>{command}</div>;
      })}
    </div>
  );
};

export default Console;
