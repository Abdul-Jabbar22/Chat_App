import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-49f3f.firebaseapp.com",
  projectId: "reactchatapp-49f3f",
  storageBucket: "reactchatapp-49f3f.appspot.com",
  messagingSenderId: "305749242003",
  appId: "1:305749242003:web:a48c6c483a6c62222d5d66",
  measurementId: "G-RD8EG9JJJE",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
