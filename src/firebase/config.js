import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx7f_k4D12Bdj5BxCdp5Z2CoydA6AegiQ",
  authDomain: "dami-and-meso-gram.firebaseapp.com",
  projectId: "dami-and-meso-gram",
  storageBucket: "dami-and-meso-gram.appspot.com",
  messagingSenderId: "534591019602",
  appId: "1:534591019602:web:93ee10ae04c467b2b01d8b",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFirestore, timestamp };
