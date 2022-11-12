// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfm3-1e6Q90KmTXJuml0-dB0XSUbrZsvQ",
  authDomain: "blog-8c003.firebaseapp.com",
  projectId: "blog-8c003",
  storageBucket: "blog-8c003.appspot.com",
  messagingSenderId: "483044091956",
  appId: "1:483044091956:web:30d6f5aef6fb7a8a6ec261"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
