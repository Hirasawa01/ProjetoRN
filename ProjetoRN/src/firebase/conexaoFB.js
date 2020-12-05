import firebase from 'firebase';
import "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyCfnXw7_XjXBeYBqnh10P_YTIFpIA0G0m0",
    authDomain: "projetorn-fb-5124d.firebaseapp.com",
    projectId: "projetorn-fb-5124d",
    storageBucket: "projetorn-fb-5124d.appspot.com",
    messagingSenderId: "90179730760",
    appId: "1:90179730760:web:ec6ef2605a338065c5877d",
    measurementId: "G-DX7043GLSB"
  };


 var app = firebase.initializeApp(firebaseConfig);

 export const conexaoFS = app.firestore();