import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD95_ml5FiEsiCoEf4dbHcRYNsfINCcjYE",
    authDomain: "whatsapp-2-dc807.firebaseapp.com",
    projectId: "whatsapp-2-dc807",
    storageBucket: "whatsapp-2-dc807.appspot.com",
    messagingSenderId: "395701135954",
    appId: "1:395701135954:web:9ba0b2941d7627531b4d8b"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }