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
    this.user = null;
    this.auth.onAuthStateChanged(user => {
      user ? (this.user = user) : (this.user = null);
    });
  }

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
}

export default Firebase;
