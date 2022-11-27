import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC1AyOT9xB1Hp2fdle3ozoq12hWWcl8TxE",
  authDomain: "linkedin-clone-3d742.firebaseapp.com",
  projectId: "linkedin-clone-3d742",
  storageBucket: "linkedin-clone-3d742.appspot.com",
  messagingSenderId: "569382044052",
  appId: "1:569382044052:web:e92d09b1dc706996d88f81",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
