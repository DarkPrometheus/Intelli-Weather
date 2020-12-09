import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyD_wjb0VYwHPBuZAUjrHL_vhy4aqlIMaEs",
  authDomain: "intelliweather-d873a.firebaseapp.com",
  projectId: "intelliweather-d873a",
  storageBucket: "intelliweather-d873a.appspot.com",
  messagingSenderId: "839016936941",
  appId: "1:839016936941:web:a6ef291fe857557d0363e4",
  measurementId: "G-4TFWFS0R7G"
};
  
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();