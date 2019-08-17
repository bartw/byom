import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { colors } from "./global-style";

const Footer = styled.footer`
  background-color: ${colors.contrast};
  color: ${colors.default};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 0.8em;
`;

const Text = styled.div`
  flex-grow: 1;
`;

export default () => (
  <Footer>
    <Text>&copy; 2019 byom</Text>
    <a
      href="https://github.com/bartw/byom"
      target="_blank"
      rel="noopener noreferrer"
      title="fork me"
    >
      <FontAwesomeIcon icon={faUtensils} fixedWidth />
    </a>
  </Footer>
);
