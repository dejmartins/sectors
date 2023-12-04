import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCD81KHJcDsVHj6pemig7_6WCBx4la78h4",
  authDomain: "sectors-3ae2b.firebaseapp.com",
  projectId: "sectors-3ae2b",
  storageBucket: "sectors-3ae2b.appspot.com",
  messagingSenderId: "1087858098973",
  appId: "1:1087858098973:web:b6f8d3b83b3367c58557f4",
  measurementId: "G-08DVE8007N",
  databaseURL: "https://sectors-3ae2b-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export {database, analytics};