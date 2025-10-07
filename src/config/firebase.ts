import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDM49d9sK_MAHA-Ay0bzrUckBhHylvWNAg",
    authDomain: "pichanga-app-699fc.firebaseapp.com",
    projectId: "pichanga-app-699fc",
    storageBucket: "pichanga-app-699fc.firebasestorage.app",
    messagingSenderId: "159793322503",
    appId: "1:159793322503:web:cfe0d902c892fc211628a2",
    measurementId: "G-ZLSKR5S3KK"
  };


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
