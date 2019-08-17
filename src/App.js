import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default () => (
  <App>
    <Header />
    <Main />
    <Footer />
  </App>
);
