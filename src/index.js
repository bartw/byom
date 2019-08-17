import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./global-style";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Firebase, { FirebaseContext } from "./Firebase";
import Contentful, { ContentfulContext } from "./Contentful";

ReactDOM.render(
  <ContentfulContext.Provider value={new Contentful()}>
    <FirebaseContext.Provider value={new Firebase()}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </ContentfulContext.Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
