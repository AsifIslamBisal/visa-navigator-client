// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-j7kPCHg3l0LbHyx5i0jXQF4ExUYl2pI",
  authDomain: "visa-navigator-83cff.firebaseapp.com",
  projectId: "visa-navigator-83cff",
  storageBucket: "visa-navigator-83cff.firebasestorage.app",
  messagingSenderId: "294307624738",
  appId: "1:294307624738:web:2acf59342863b826cf977b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);