// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSgMUV6-UnWoRr8emkyIOSE6_yiOVq4To",
  authDomain: "netflixgpt-bdd2e.firebaseapp.com",
  projectId: "netflixgpt-bdd2e",
  storageBucket: "netflixgpt-bdd2e.appspot.com",
  messagingSenderId: "641774665477",
  appId: "1:641774665477:web:03547dc7895beb1952416c",
  measurementId: "G-Q6TW4G8ZEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);