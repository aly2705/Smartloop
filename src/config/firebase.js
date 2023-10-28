// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDFy_9-ecX3c-ucaX53sZR6JycIF0pyiCI",
  authDomain: "smartloop-26aed.firebaseapp.com",
  projectId: "smartloop-26aed",
  storageBucket: "smartloop-26aed.appspot.com",
  messagingSenderId: "436926290110",
  appId: "1:436926290110:web:8478a093b902d90923e6ef",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
