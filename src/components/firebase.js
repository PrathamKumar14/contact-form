import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "contact-form-3ec8b.firebaseapp.com",
  databaseURL: "https://contact-form-3ec8b.firebaseio.com",
  projectId: "contact-form-3ec8b",
  storageBucket: "contact-form-3ec8b.appspot.com",
  messagingSenderId: process.env.MESSAGE_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
});

console.log(process.env);

var db = firebaseApp.firestore();
var messagesRef = firebase.database().ref("messages");

export { db, messagesRef };
