import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-zHUXpNFpJh_KnOjTuYwxYlWkxHKGUIM",
    authDomain: "chatapp-e6500.firebaseapp.com",
    databaseURL: "https://chatapp-e6500.firebaseio.com",
    projectId: "chatapp-e6500",
    storageBucket: "chatapp-e6500.appspot.com",
    messagingSenderId: "746283397458",
    appId: "1:746283397458:web:cad79aa37e836d95dd4a8b",
    measurementId: "G-8NX4RJGFG9"
  };

export default function firebaseInit(){
    firebase.initializeApp(firebaseConfig);
}