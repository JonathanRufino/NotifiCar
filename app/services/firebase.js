import firebase from 'firebase';

import FirebaseConfig from '../config/firebase';

const firebaseApp = firebase.initializeApp({ 
    apiKey: FirebaseConfig.API_KEY,
    authDomain: FirebaseConfig.AUTH_DOMAIN,
    databaseURL: FirebaseConfig.DATABASE_URL,
    projectId: FirebaseConfig.PROJECT_ID,
    storageBucket: FirebaseConfig.STORAGE_BUCKET,
    messagingSenderId: FirebaseConfig.MESSAGING_SENDER_ID
});

export default firebaseApp;
