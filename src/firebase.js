// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxB-gBry0-40V-mr7iQLpu-98vRH4gbJM",
  authDomain: "challenge-dbf24.firebaseapp.com",
  projectId: "challenge-dbf24",
  storageBucket: "challenge-dbf24.appspot.com",
  messagingSenderId: "214788378178",
  appId: "1:214788378178:web:6d8bc50e515d089f8d67db",
  measurementId: "G-0MB3BMZ424"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
