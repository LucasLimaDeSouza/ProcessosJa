import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {

    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  
    projectId: import.meta.env.VITE_PROJECT_ID,
  
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  
    appId: import.meta.env.VITE_APP_ID
  
};

const app = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

export {firebase, auth, app}


