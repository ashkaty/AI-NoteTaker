import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC6px7CLzR04iSGvAU81Ba0FNXzU49sr0E",
    authDomain: "ai-notetaker-5086d.firebaseapp.com",
    projectId: "ai-notetaker-5086d",
    storageBucket: "ai-notetaker-5086d.appspot.com",
    messagingSenderId: "521697948514",
    appId: "1:521697948514:web:7609aac6928b6e26e3f23b",
    measurementId: "G-HM4H8CTB2G"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase