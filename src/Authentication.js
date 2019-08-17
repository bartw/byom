import React, { useState } from "react";
import { withFirebase } from "./Firebase";
import "./Authentication.css";

const Authentication = ({ firebase }) => {
  const [isSignedIn, setIsSignedIn] = useState(firebase.isSignedIn());
  const updateIsSignedIn = () => setIsSignedIn(firebase.isSignedIn());
  const signOut = () => firebase.signOut().then(() => updateIsSignedIn());
  const signIn = () => firebase.signIn().then(() => updateIsSignedIn());

  return (
    <div className="authentication">
      {isSignedIn ? (
        <div>
          <button onClick={signOut}>sign out</button>
        </div>
      ) : (
        <div>
          <button onClick={signIn}>sign in</button>
        </div>
      )}
    </div>
  );
};

export default withFirebase(Authentication);
