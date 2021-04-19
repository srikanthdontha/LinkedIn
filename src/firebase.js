import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA43q2CWI6pWMtSwZ2Ytk8bSpx1WjJ6iYg",
  authDomain: "linkedin-snipercoder.firebaseapp.com",
  projectId: "linkedin-snipercoder",
  storageBucket: "linkedin-snipercoder.appspot.com",
  messagingSenderId: "8873015844",
  appId: "1:8873015844:web:0ec4dec28d28a8ef52b6b1",
  measurementId: "G-1Z164FN5ZB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
