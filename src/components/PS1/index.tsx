import React from "react";
import styled from "styled-components";
import { useTheme } from "../../context/Theme";
import { getUserConfig } from "../../utils/config";

export const ColorText = styled.span`
  color: ${({ color }) => color};
`;

const Container = styled.p`
  display: inline-block;
`;

const PS1 = () => {
  const { user, host } = getUserConfig();
  const { theme } = useTheme();

  return (
    <Container>
      <ColorText color={theme.red}>{user}</ColorText>
      <ColorText color={theme.white}>@</ColorText>
      <ColorText color={theme.cyan}>{host}</ColorText>
      <span>$ ~ </span>
    </Container>
  );
};

export default PS1;
