import React, { Dispatch, SetStateAction } from "react";
import PS1 from "./PS1";

type HistoryHook = [string[], Dispatch<SetStateAction<string[]>>];

const Screen = ({ historyHook }: { historyHook: HistoryHook }) => {
  const history = historyHook[0];
  return (
    <div>
      {history.map((item, idx) => (
        <div key={idx}>
          <PS1 />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Screen;
