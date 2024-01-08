// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJPqobBUBk1sWiTCmsU6DSQVng_3bf-_o",
    authDomain: "netflix-chatgpt-ui.firebaseapp.com",
    projectId: "netflix-chatgpt-ui",
    storageBucket: "netflix-chatgpt-ui.appspot.com",
    messagingSenderId: "742958476363",
    appId: "1:742958476363:web:83efe3aa2e21fbcf7071ce",
    measurementId: "G-35XD1JYFYG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
