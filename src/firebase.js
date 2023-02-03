// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { initializeApp } from 'firebase/app';

const firebaseConfig = {

  apiKey: "AIzaSyA9Msi5pMVy2U9hKgzRT2O_Tn8MCEARt8I",
  authDomain: "clone-73ad5.firebaseapp.com",
  projectId: "clone-73ad5",
  storageBucket: "clone-73ad5.appspot.com",
  messagingSenderId: "196563844519",
  appId: "1:196563844519:web:83a11467dfc2903b0fca82",
  measurementId: "G-NXG0VTC5DG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
export const auth = firebase.auth();

// export { auth };

