import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import Loader from "./components/ui/Loader";

const firebaseConfig = {
  apiKey: "AIzaSyDy_Xf2vasfWoV0oLMX6n1xS6bEFEQAlWk",
  authDomain: "habit-tracker-1a8d5.firebaseapp.com",
  projectId: "habit-tracker-1a8d5",
  storageBucket: "habit-tracker-1a8d5.appspot.com",
  messagingSenderId: "697494144507",
  appId: "1:697494144507:web:cdd486ca8bacd2a24ab75e",
  measurementId: "G-VDYEJVPWHQ",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const FirebaseContext = React.createContext();

export function useFirebase() {
  return React.useContext(FirebaseContext);
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};
