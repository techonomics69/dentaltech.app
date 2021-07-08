import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// [tasks] Create a file that initializes Firebase Auth and Cloud Firestore using the Firebase JS library and exports the firebase instance.
// You can then important this file anywhere that needs to call firebase methods.

// Make sure it hasn't already been initialized
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  });
}

export default firebase;
