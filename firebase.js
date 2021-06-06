import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAckj0fqKAwXM0JvfzHkE5zFkZMeSNQIMQ",
    authDomain: "fir-learning-87360.firebaseapp.com",
    projectId: "fir-learning-87360",
    storageBucket: "fir-learning-87360.appspot.com",
    messagingSenderId: "843902062796",
    appId: "1:843902062796:web:cb94ee4d2dbe67ba70b269",
    measurementId: "G-ECQ5LKK5GR"
  };
// Initialize Firebase
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}
const  auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export {auth , db, storage , serverTimestamp};