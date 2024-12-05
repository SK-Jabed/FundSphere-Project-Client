// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGCHEVpAaHkiFCeirWpQEhFMFyynr1ky8",
  authDomain: "b10-assignment-10-6b3b9.firebaseapp.com",
  projectId: "b10-assignment-10-6b3b9",
  storageBucket: "b10-assignment-10-6b3b9.firebasestorage.app",
  messagingSenderId: "316971832647",
  appId: "1:316971832647:web:5cd3e75f5f335ca11ba862",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;