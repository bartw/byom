import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4em;
`;

const SubTitle = styled.h1`
  margin-top: 10px;
  font-size: 2em;
`;

export default () => (
  <Container>
    <div>
      <Title>byom</Title>
      <SubTitle>bring your own music</SubTitle>
    </div>
  </Container>
);
