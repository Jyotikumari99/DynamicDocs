import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { firebaseKey } from "./keyPass";
const firebaseConfig = {
    apiKey: firebaseKey.apiKey,

    authDomain: firebaseKey.authDomain,

    projectId: firebaseKey.projectId,

    storageBucket: firebaseKey.storageBucket,

    messagingSenderId: firebaseKey.messagingSenderId,

    appId: firebaseKey.appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
