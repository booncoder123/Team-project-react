import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
