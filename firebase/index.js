// import { initializeApp } from "firebase/app";
// import firebaseConfig from "./config";
// import { getAuth } from "firebase/auth";

// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
// export default auth;

// firebase/index.js
import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBKN0KQOIX_3SlEj5SZOY1Uu_7ZWcjxdQ4",
    authDomain: "se-community-5c2e5.firebaseapp.com",
    projectId: "se-community-5c2e5",
    storageBucket: "se-community-5c2e5.appspot.com",
    messagingSenderId: "373461172264",
    appId: "1:373461172264:web:3e585c40175081c06b351d",
    measurementId: "G-PKNEDYFN4Y"
};

initializeApp(config);

const auth = getAuth();
export {
 auth,
 firebase
};
