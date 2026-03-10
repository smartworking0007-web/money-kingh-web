// src/lib/firebase.ts
'use client'
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Direct config values (Testing ke liye)
const firebaseConfig = {
  apiKey: "AIzaSyCeamPfpzIT5kWbBFUJCXutv7JEOV3d5NM",
  authDomain: "money-king-financial-sercices.firebaseapp.com",
  projectId: "money-king-financial-sercices",
  storageBucket: "money-king-financial-sercices.firebasestorage.app",
  messagingSenderId: "254791178208",
  appId: "1:254791178208:web:9657c53db6c51c6c613d85",
  measurementId: "G-H5Y2DCR8LM"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);