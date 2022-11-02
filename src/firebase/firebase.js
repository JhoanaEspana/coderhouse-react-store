import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC1ln5AT-sniAYNGelEVREQ1G7ZgktLudo",
  authDomain: "jhostore-c4278.firebaseapp.com",
  projectId: "jhostore-c4278",
  storageBucket: "jhostore-c4278.appspot.com",
  messagingSenderId: "235760281443",
  appId: "1:235760281443:web:855ad786b3b1b44fabd556"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);