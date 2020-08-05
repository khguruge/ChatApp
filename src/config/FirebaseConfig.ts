import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAy6ZV4ONBk0eslU3Dfa8hsOJlSOOSgfGs",
  authDomain: "mychat-c75ff.firebaseapp.com",
  databaseURL: "https://mychat-c75ff.firebaseio.com",
  projectId: "mychat-c75ff",
  storageBucket: "mychat-c75ff.appspot.com",
  messagingSenderId: "130176499604",
  appId: "1:130176499604:web:a2c68f1e15feeb27261981",
  measurementId: "G-Z8SRYXKZYG"
  };

export default function firebaseInit(){
    firebase.initializeApp(firebaseConfig);
}