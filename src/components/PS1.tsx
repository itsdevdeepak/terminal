import React from "react";
import styled, { useTheme } from "styled-components";
import { getConfig } from "../utils/config";

const PS1Container = styled.p`
  display: inline-block;
`;

const ColorText = styled.span`
  color: ${({ color }) => color};
`;

const PS1 = () => {
  const { user, host } = getConfig();
  const theme = useTheme() as Theme;

  return (
    <PS1Container>
      <ColorText color={theme.red}>{user}</ColorText>
      <ColorText color={theme.white}>@</ColorText>
      <ColorText color={theme.cyan}>{host}</ColorText>
      <span>$ ~</span>
    </PS1Container>
  );
};

export default PS1;
