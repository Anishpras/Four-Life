import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD2Rd26R9QhEECNyBZ9Z0afBlxVYbTqK4k",
  authDomain: "four-life-application-form.firebaseapp.com",
  projectId: "four-life-application-form",
  storageBucket: "four-life-application-form.appspot.com",
  messagingSenderId: "497716993265",
  appId: "1:497716993265:web:19796ea90a7e66293b1d50",
});

const db = firebaseApp.firestore();

const storage = firebase.storage();

export { db, storage };
