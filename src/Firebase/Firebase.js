import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  appId: process.env.REACT_APP_APP_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.provider = new app.auth.FacebookAuthProvider();
    this.initialized = false;
    this.user = null;
    this.authenticationChangedHandlers = [];
    this.auth.onAuthStateChanged(user => {
      this.initialized = true;
      user ? (this.user = user) : (this.user = null);
      this.authenticationChangedHandlers.forEach(handler => {
        handler();
      });
    });
  }

  isInitialized = () => this.initialized;
  isSignedIn = () => !!this.user;
  signIn = () =>
    this.auth
      .signInWithPopup(this.provider)
      .then(({ user }) => {
        this.user = user;
      })
      .catch(error => {
        console.log(error);
      });
  signOut = () =>
    this.auth.signOut().then(() => {
      this.user = null;
    });
  addAuthenticationChangedHandler = handler => {
    this.authenticationChangedHandlers = [
      ...this.authenticationChangedHandlers,
      handler
    ];
    return () => {
      this.authenticationChangedHandlers = this.authenticationChangedHandlers.filter(
        h => h !== handler
      );
    };
  };
}

export default Firebase;
