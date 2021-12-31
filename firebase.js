import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGBYk7UrxqcQq_sdsyM7p0d3z9KL4yrs4",
  authDomain: "twitter-clone-760b1.firebaseapp.com",
  projectId: "twitter-clone-760b1",
  storageBucket: "twitter-clone-760b1.appspot.com",
  messagingSenderId: "17487037394",
  appId: "1:17487037394:web:e01c4a8d07808981eebe0b",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
