import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4-sLreiOdqyiw5awKRV6q0fvps9PCDDc",
  authDomain: "clone-93c90.firebaseapp.com",
  projectId: "clone-93c90",
  storageBucket: "clone-93c90.appspot.com",
  messagingSenderId: "948054158420",
  appId: "1:948054158420:web:8bc20dac8f4d28722391c1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
