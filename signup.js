// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';
// import './main.css';
// import './index.css';

// Firebase App (the core Firebase SDK) is always required
// and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

// Add Firebase project configuration object here
var firebaseConfig = {
    apiKey: "AIzaSyBlnT8Z2kPBuHpHQagq7511dAQxwWc1SAg",
    authDomain: "kyoyu-carpooling-system.firebaseapp.com",
    databaseURL: "https://kyoyu-carpooling-system.firebaseio.com",
    projectId: "kyoyu-carpooling-system",
    storageBucket: "kyoyu-carpooling-system.appspot.com",
    messagingSenderId: "1075899178529",
    appId: "1:1075899178529:web:46efdd5e82d89dfb098d60",
    measurementId: "G-YFTW3PRSS6"
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// FirebaseUI config
const uiConfig = {
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  signInOptions: [
    // Email / Password Provider.
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl){
      // Handle sign-in.
      // Return false to avoid redirect.
      return false;
    }
  }
};