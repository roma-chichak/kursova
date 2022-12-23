import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyB5MzQMdHptEzsZobx4rmQoEPr5WXniC9M",
    authDomain: "rproject-3ed9a.firebaseapp.com",
    databaseURL: "https://rproject-3ed9a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "rproject-3ed9a",
    storageBucket: "rproject-3ed9a.appspot.com",
    messagingSenderId: "347365627522",
    appId: "1:347365627522:web:d97846f57b3a60f41ec69b"
};

const app = initializeApp(firebaseConfig);
export const confirmation = getAuth(app);
export const db = getDatabase(app);