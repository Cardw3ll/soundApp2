// Import the functions you need from the SDKs you need
import firebase from "firebase/app"
require('firebase/auth')
// import firebase from 'firebase/compat/app';
// import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7k0BKEhieXvY71nTsTUoKCeZWtPL1KDU",
  authDomain: "recordapp-87a3b.firebaseapp.com",
  projectId: "recordapp-87a3b",
  storageBucket: "recordapp-87a3b.appspot.com",
  messagingSenderId: "803943367719",
  appId: "1:803943367719:web:089d3c829d1f8f6119fa02",
  measurementId: "G-B3C5EV0Q4D"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
// const analytics = firebase.getAnalytics(app);
export const auth = firebase.auth();