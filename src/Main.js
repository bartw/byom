import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { colors } from "./global-style";
import { withFirebase } from "./Firebase";
import Hero from "./Hero";
import Feed from "./Feed";

const Main = styled.div`
  flex-grow: 1;
  background-color: ${colors.default};
  color: ${colors.contrast};
  display: flex;
`;

const MainComponent = ({ firebase }) => {
  const [isSignedIn, setIsSignedIn] = useState(firebase.isSignedIn());

  useEffect(() =>
    firebase.addAuthenticationChangedHandler(() =>
      setIsSignedIn(firebase.isSignedIn())
    )
  );

  return (
    <Main>
      {!isSignedIn && <Hero />}
      {isSignedIn && <Feed />}
    </Main>
  );
};

export default withFirebase(MainComponent);
