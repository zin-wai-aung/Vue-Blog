import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA5OPualXa3NHuQ9MDxcLkkgzgvaWk0it4",
  authDomain: "vue-blog-system-9b072.firebaseapp.com",
  projectId: "vue-blog-system-9b072",
  storageBucket: "vue-blog-system-9b072.appspot.com",
  messagingSenderId: "372115700144",
  appId: "1:372115700144:web:d2c75a496fba9aab857e75"
};

firebase.initializeApp(firebaseConfig)
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp

export {db, timestamp}