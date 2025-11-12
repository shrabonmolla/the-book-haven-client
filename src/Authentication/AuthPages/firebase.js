// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATxSl7wHI-SK661nTZTOZK3AaCnZ81jvc",
  authDomain: "the-book-haven-auth.firebaseapp.com",
  projectId: "the-book-haven-auth",
  storageBucket: "the-book-haven-auth.firebasestorage.app",
  messagingSenderId: "444470680563",
  appId: "1:444470680563:web:049524c99d3e052a689086",
  measurementId: "G-P747G1WKG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
