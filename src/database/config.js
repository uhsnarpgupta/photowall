import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDhw-DwLNo2Ed1XfYJbRLJB6o59LXL4LY4",
  authDomain: "photowall-4b47d.firebaseapp.com",
  databaseURL: "https://photowall-4b47d.firebaseio.com",
  projectId: "photowall-4b47d",
  storageBucket: "photowall-4b47d.appspot.com",
  messagingSenderId: "140731132897",
  appId: "1:140731132897:web:7e0acb59f606f44bcf40a0",
  measurementId: "G-WNMW1ZWRE8",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
