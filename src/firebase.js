// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

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

export {app}
