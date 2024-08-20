// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase,ref, set , onValue  } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBmHhkv7oA_gDg1q0GDmq6-O5KWoRErOjQ",
  authDomain: "reactfirebase-93345.firebaseapp.com",
  projectId: "reactfirebase-93345",
  storageBucket: "reactfirebase-93345.appspot.com",
  messagingSenderId: "1099266479876",
  appId: "1:1099266479876:web:40c15602b61d808e512251",
  measurementId: "G-V813XGL16E",
  databaseURL:"https://reactfirebase-93345-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
export {
    app,database,ref, set ,onValue
}