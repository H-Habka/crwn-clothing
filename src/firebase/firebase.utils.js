import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
  apiKey: "AIzaSyCJkNE9rcsohNE-mvDETeIC7czqlHdYYhg",
  authDomain: "crwn-db-999999.firebaseapp.com",
  projectId: "crwn-db-999999",
  storageBucket: "crwn-db-999999.appspot.com",
  messagingSenderId: "878530215729",
  appId: "1:878530215729:web:c486456e7521ebb877fa10",
  measurementId: "G-Y0SMPL4KKQ"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;