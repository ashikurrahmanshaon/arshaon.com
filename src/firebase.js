import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUXpE3c94VjFQy6mxjidLrwFWalRR8iBw",
  authDomain: "arshaon-b5e85.firebaseapp.com",
  projectId: "arshaon-b5e85",
  storageBucket: "arshaon-b5e85.firebasestorage.app",
  messagingSenderId: "823305146140",
  appId: "1:823305146140:web:0a1b0d5d297000d672b4d9",
  measurementId: "G-H73FJ7JKVW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
