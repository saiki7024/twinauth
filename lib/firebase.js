// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoE-V_AqpudoNxbqch-hRXhVybg5wrWvk",
  authDomain: "twin-auth.firebaseapp.com",
  projectId: "twin-auth",
  storageBucket: "twin-auth.firebasestorage.app",
  messagingSenderId: "198276083652",
  appId: "1:198276083652:web:802ac6a124dd7dd3397e91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
