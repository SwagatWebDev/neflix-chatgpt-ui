// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD7BELnP2mH-WK1mDxPA29vZGc6Ckz-CSU",
    authDomain: "netflix-chatgpt.firebaseapp.com",
    projectId: "netflix-chatgpt",
    storageBucket: "netflix-chatgpt.appspot.com",
    messagingSenderId: "64799742348",
    appId: "1:64799742348:web:d1960ba6d8613061fcdea9",
    measurementId: "G-TYPFRLR6MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
