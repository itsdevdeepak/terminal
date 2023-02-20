import React from "react";
import styled, { useTheme } from "styled-components";

const PS1Container = styled.p`
  display: inline-block;
`;

type PS1Props = {
  user?: string;
  host?: string;
};

const ColorText = styled.span`
  color: ${({ color }) => color};
`;

const PS1 = ({ user = "user", host = "host" }: PS1Props) => {
  const theme = useTheme() as Theme;

  return (
    <PS1Container>
      <ColorText color={theme.red}>{user}</ColorText>
      <ColorText color={theme.white}>@</ColorText>
      <ColorText color={theme.green}>{host}</ColorText>
    </PS1Container>
  );
};

export default PS1;
