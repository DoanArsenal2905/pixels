import firebase from 'firebase/app'
import 'firebase/firebase-storage'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9cHKdlIOpH-fbtJeZDjpMudhiEC6CAvA",
  authDomain: "pixels-d8f7d.firebaseapp.com",
  databaseURL: "https://pixels-d8f7d.firebaseio.com",
  projectId: "pixels-d8f7d",
  storageBucket: "pixels-d8f7d.appspot.com",
  messagingSenderId: "865275262715",
  appId: "1:865275262715:web:faaecf106df63703ac625e",
  measurementId: "G-F7TKVNXHZ2"
}

firebase.initializeApp(firebaseConfig)
// firebase.analytics();

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
