import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
    this.db = app.firestore();

    this.provider = new app.auth.FacebookAuthProvider();

    this.initialized = false;
    this.user = null;
    this.userRef = null;
    this.authenticationChangedHandlers = [];

    this.auth.onAuthStateChanged(user => {
      this.initialized = true;

      if (!user) {
        this.user = null;
        this.authenticationChangedHandlers.forEach(handler => handler());
        return;
      }

      const { uid, displayName } = user;
      const userRef = this.db.collection("users").doc(uid);

      userRef
        .set({ name: user.displayName }, { merge: true })
        .then(() => {
          this.user = { uid, name: displayName, userRef };
          this.authenticationChangedHandlers.forEach(handler => handler());
        })
        .catch(error => console.error(error));
    });
  }

  isInitialized = () => this.initialized;

  isSignedIn = () => !!this.user;

  signIn = () =>
    this.auth
      .signInWithPopup(this.provider)
      .catch(error => console.error(error));

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

  feed = callback => {
    if (!this.isSignedIn()) {
      throw new Error("Unauthorized");
    }
    return this.user.userRef.onSnapshot(doc => callback(doc.data().feed || []));
  };

  addFeedItem = feedItem => {
    if (!this.isSignedIn()) {
      throw new Error("Unauthorized");
    }
    this.user.userRef.update({
      feed: app.firestore.FieldValue.arrayUnion(feedItem)
    });
  };
}

export default Firebase;
