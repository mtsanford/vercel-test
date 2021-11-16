import { getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDR2Kgo8hkISrTvtzWvd8NIh3X4eWcEpUo",
  authDomain: "next-firebase-demo-fb50c.firebaseapp.com",
  projectId: "next-firebase-demo-fb50c",
  storageBucket: "next-firebase-demo-fb50c.appspot.com",
  messagingSenderId: "234801471454",
  appId: "1:234801471454:web:cde0b5a887edea942e874f",
  measurementId: "G-QNQPZ4W3T6",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();
// export const storage = firebase.storage();

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();
export const googleAuthProvider = new GoogleAuthProvider();
