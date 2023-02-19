import React, { Dispatch, SetStateAction } from "react";

type HistoryHook = [string[], Dispatch<SetStateAction<string[]>>];

const Screen = ({ historyHook }: { historyHook: HistoryHook }) => {
  const history = historyHook[0];
  return (
    <div>
      {history.map((item, idx) => (
        <p key={idx}>{item}</p>
      ))}
    </div>
  );
};

export default Screen;
