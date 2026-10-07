import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { env } from "$env/dynamic/public";

const useEmulators = env.PUBLIC_USE_EMULATORS === "true";

const firebaseConfig = useEmulators
  ? {
      // local emulators: a "demo-" project id never touches a real Firebase project
      apiKey: "demo-api-key",
      authDomain: "demo-encryptid.firebaseapp.com",
      projectId: "demo-encryptid",
      storageBucket: "demo-encryptid.appspot.com",
    }
  : {
      apiKey: "AIzaSyBh1xZHldl8A3iclYeH_G8C8fNy9Dx26Ow",
      authDomain: "encryptid-offline.firebaseapp.com",
      projectId: "encryptid-offline",
      storageBucket: "encryptid-offline.appspot.com",
      messagingSenderId: "369321917089",
      appId: "1:369321917089:web:a25b1954f18bac9ce38ee0",
      measurementId: "G-LM46YV05YK"
    };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

if (useEmulators) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
}
