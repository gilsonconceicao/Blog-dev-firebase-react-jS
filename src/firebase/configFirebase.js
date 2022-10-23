// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwfjqoDXXQKjvtbgXXa6nYqCo7vcspMlI",
  authDomain: "blog-tech-dev-personal.firebaseapp.com",
  projectId: "blog-tech-dev-personal",
  storageBucket: "blog-tech-dev-personal.appspot.com",
  messagingSenderId: "589178849385",
  appId: "1:589178849385:web:9b804cca88e3bd3819faf8",
  measurementId: "G-06NQH50Z65",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
