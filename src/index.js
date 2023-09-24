import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { App } from "./App.jsx"

//Firebase conf
const firebaseConfig = {
    apiKey: "AIzaSyBlDNtfrb3Hlk24lVhwKf7WsicV4O8qYcc",
    authDomain: "coder-144bf.firebaseapp.com",
    projectId: "coder-144bf",
    storageBucket: "coder-144bf.appspot.com",
    messagingSenderId: "836067502204",
    appId: "1:836067502204:web:e2d067f32b2e00ea4901f9"
  };

// Firebase init
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);