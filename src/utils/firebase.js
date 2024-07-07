// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq6GdjFOxi2fMe2LihAduzPzrs7M5a_1M",
  authDomain: "netflix-gpt-sk-9c778.firebaseapp.com",
  projectId: "netflix-gpt-sk-9c778",
  storageBucket: "netflix-gpt-sk-9c778.appspot.com",
  messagingSenderId: "650906783407",
  appId: "1:650906783407:web:82d1c04b3fa254adaece5a",
  measurementId: "G-7BGNDPM1N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();