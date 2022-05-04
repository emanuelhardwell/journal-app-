// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA17Aiud3TP9gRSr5GmEF9tT-ETxJ6UfQs",
  authDomain: "react-app-cursos-85661.firebaseapp.com",
  projectId: "react-app-cursos-85661",
  storageBucket: "react-app-cursos-85661.appspot.com",
  messagingSenderId: "466717344292",
  appId: "1:466717344292:web:f297542e377a7fec0d8eb1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
