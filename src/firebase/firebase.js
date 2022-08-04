// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBv_SexvD-P_bqiavT7tHmYGbjgvepDo1o",
  authDomain: "reactcomision37830-93c53.firebaseapp.com",
  projectId: "reactcomision37830-93c53",
  storageBucket: "reactcomision37830-93c53.appspot.com",
  messagingSenderId: "792857332616",
  appId: "1:792857332616:web:9e144a2d04d5bf0e3c883d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
