// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnFm0dbqUY_bGtsi0eHMVvmSqi1zKcxTo",
  authDomain: "auth-demo-3bbcc.firebaseapp.com",
  projectId: "auth-demo-3bbcc",
  storageBucket: "auth-demo-3bbcc.appspot.com",
  messagingSenderId: "1043942367239",
  appId: "1:1043942367239:web:92d2500b84f0bb09460aa2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)