// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Xy_qOYdfG4LicnTKxjdlyBc_1_RYfxw",
  authDomain: "clase12-cfd42.firebaseapp.com",
  projectId: "clase12-cfd42",
  storageBucket: "clase12-cfd42.appspot.com",
  messagingSenderId: "891711168033",
  appId: "1:891711168033:web:2591d99e821a2c3d178d60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
