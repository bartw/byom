import React from "react";
import styled from "styled-components";
import { colors } from "./global-style";
import Authentication from "./Authentication";

const Header = styled.header`
  background-color: ${colors.contrast};
  color: ${colors.default};
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2em;
  flex-grow: 1;
`;

export default () => (
  <Header>
    <Title>byom</Title>
    <Authentication />
  </Header>
);
