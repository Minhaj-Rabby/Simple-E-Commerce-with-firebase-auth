// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQdcRvY-G8sCqXWBQt8S1S9gOzwbtnKqI",
  authDomain: "simple-ecommerce-firebase-auth.firebaseapp.com",
  projectId: "simple-ecommerce-firebase-auth",
  storageBucket: "simple-ecommerce-firebase-auth.appspot.com",
  messagingSenderId: "19195940225",
  appId: "1:19195940225:web:3004639b16e7ac72922c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;