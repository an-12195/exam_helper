// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFrsYF1g3PDoi2qxU1tU31LCvgnTLL03I",
  authDomain: "examhelper-ced40.firebaseapp.com",
  // ... rest of your config from Firebase console
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
