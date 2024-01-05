// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADRIVccsCmpvtvoasXi4sWiOk-k5T4T-E",
    authDomain: "netflix-chatgpt-project.firebaseapp.com",
    projectId: "netflix-chatgpt-project",
    storageBucket: "netflix-chatgpt-project.appspot.com",
    messagingSenderId: "595155607795",
    appId: "1:595155607795:web:0f0445298fe51d7ec09786",
    measurementId: "G-51MSY5N0VW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
