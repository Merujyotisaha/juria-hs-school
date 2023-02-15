
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBTv1Gd-AWSE0vco2nIsEwUzGrlvdx6MwQ",
  authDomain: "alumni-9ad21.firebaseapp.com",
  projectId: "alumni-9ad21",
  storageBucket: "alumni-9ad21.appspot.com",
  messagingSenderId: "119464820395",
  appId: "1:119464820395:web:ebe14d61ae48279cfe41ee",
  measurementId: "G-Q2QJFH4HB4"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
