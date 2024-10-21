// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNKd-6yytJdYIsIUJ-snCBhtW9UjW2SrQ",
  authDomain: "jornada-milhas-5e978.firebaseapp.com",
  projectId: "jornada-milhas-5e978",
  storageBucket: "jornada-milhas-5e978.appspot.com",
  messagingSenderId: "136000404056",
  appId: "1:136000404056:web:618801f68d228e71faa82d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging()