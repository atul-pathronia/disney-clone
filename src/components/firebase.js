import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBo1kRR_NC7mD2E6wVQQMopjl19n6I35x0",
  authDomain: "disneyplus-26569.firebaseapp.com",
  projectId: "disneyplus-26569",
  storageBucket: "disneyplus-26569.appspot.com",
  messagingSenderId: "919635923656",
  appId: "1:919635923656:web:250c7a2b6eec9e22394bfd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
