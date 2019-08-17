import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./global-style";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./Firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <GlobalStyle />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
