// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: "crud-firebase-e30f6.firebaseapp.com",
  projectId: "crud-firebase-e30f6",
  storageBucket: "crud-firebase-e30f6.appspot.com",
  messagingSenderId: "51331116803",
  appId: "1:51331116803:web:7ce7ba49b2f2d503dac336",
  measurementId: "G-CDB7T0KVKN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
