import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import { colors } from "./global-style";
import { withFirebase } from "./Firebase";
import Hero from "./Hero";
import Feed from "./Feed";

const Main = styled.div`
  padding: 20px;
  flex-grow: 1;
  background-color: ${colors.default};
  color: ${colors.contrast};
  display: flex;
`;

const MainComponent = ({ firebase, richText }) => {
  const [isSignedIn, setIsSignedIn] = useState(firebase.isSignedIn());

  useEffect(() =>
    firebase.addAuthenticationChangedHandler(() =>
      setIsSignedIn(firebase.isSignedIn())
    )
  );

  return (
    <Main>
      {richText ? (
        <div>{documentToReactComponents(richText)}</div>
      ) : (
        <>
          {!isSignedIn && <Hero />}
          {isSignedIn && <Feed />}
        </>
      )}
    </Main>
  );
};

export default withFirebase(MainComponent);
