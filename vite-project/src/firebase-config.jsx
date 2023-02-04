// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth,GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfhcIxgYzeAVlScXsyUw7C4DExPeDN8BM",
  authDomain: "chatroom-52f8f.firebaseapp.com",
  projectId: "chatroom-52f8f",
  storageBucket: "chatroom-52f8f.appspot.com",
  messagingSenderId: "119704079734",
  appId: "1:119704079734:web:76dec642e21782b6e47e57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider()
export const db=getFirestore(app)