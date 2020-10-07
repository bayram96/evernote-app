import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCxrnjmJx4vTv2D5P2NfjH24d2p34-OMD8",
  authDomain: "evernote-clone-e370d.firebaseapp.com",
  databaseURL: "https://evernote-clone-e370d.firebaseio.com",
  projectId: "evernote-clone-e370d",
  storageBucket: "evernote-clone-e370d.appspot.com",
  messagingSenderId: "424440680308",
  appId: "1:424440680308:web:bc1532ce9abd827c53e621",
  measurementId: "G-DXQ1FXH9JZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
