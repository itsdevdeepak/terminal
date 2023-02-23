import React from "react";
import styled from "styled-components";

const ColumnText = styled.div`
  .lable {
    color: ${(props: { theme: Theme }) => props.theme.blue};
    font-weight: bold;
  }
`;

const Help = (args: string[]) => {
  console.log("args", args);

  if (args.join())
    return <span>help: {args.join(" ")}: is not help command</span>;
  return (
    <div>
      <p>list of available commands</p>
      <ColumnText>
        <div className="row">
          <p className="col lable">echo</p>
          <span className="sperater"> - </span>
          <p className="col">print message after command</p>
        </div>
      </ColumnText>
    </div>
  );
};
export default Help;
