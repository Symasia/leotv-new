import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "../configs/firebaseConfig.js";
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;