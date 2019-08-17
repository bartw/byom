import React, { useState, useEffect } from "react";
import { withFirebase } from "./Firebase";
import styled from "styled-components";
import { colors } from "./global-style";

const SignOutButton = styled.button`
  border: 2px solid ${colors.veryLight};
  border-radius: 3px;
  color: ${colors.veryLight};
  font-size: 1.5em;
  background-color: ${colors.contrast};
`;

const SignInButton = styled.button`
  border: 2px solid ${colors.default};
  border-radius: 3px;
  color: ${colors.default};
  font-size: 1.5em;
  background-color: ${colors.contrast};
`;

const Authentication = ({ firebase }) => {
  const [isInitialized, setIsInitialized] = useState(firebase.isInitialized());
  const [isSignedIn, setIsSignedIn] = useState(firebase.isSignedIn());

  useEffect(() =>
    firebase.addAuthenticationChangedHandler(() => {
      setIsInitialized(firebase.isInitialized());
      setIsSignedIn(firebase.isSignedIn());
    })
  );

  return (
    <div className="authentication">
      {isInitialized && isSignedIn && (
        <SignOutButton onClick={firebase.signOut}>sign out</SignOutButton>
      )}
      {isInitialized && !isSignedIn && (
        <SignInButton onClick={firebase.signIn}>sign in</SignInButton>
      )}
    </div>
  );
};

export default withFirebase(Authentication);
