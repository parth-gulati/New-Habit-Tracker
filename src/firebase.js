// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase'
import { getAnalytics } from "firebase/analytics";
require('firebase/auth')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy_Xf2vasfWoV0oLMX6n1xS6bEFEQAlWk",
  authDomain: "habit-tracker-1a8d5.firebaseapp.com",
  projectId: "habit-tracker-1a8d5",
  storageBucket: "habit-tracker-1a8d5.appspot.com",
  messagingSenderId: "697494144507",
  appId: "1:697494144507:web:cdd486ca8bacd2a24ab75e",
  measurementId: "G-VDYEJVPWHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

//const analytics = getAnalytics(app);

// signing in with email and password

const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

//registering with email and password
const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await db.collection("users").add({
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

//reset password
const sendPasswordResetEmail = async (email) => {
    try {
      await auth.sendPasswordResetEmail(email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

//logout
const logout = () => {
    auth.signOut();
};

export {
    auth,
    db,
    signInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
};