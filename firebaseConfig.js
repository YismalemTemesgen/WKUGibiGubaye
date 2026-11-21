import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIs5CdyD3TpsQBlH26Lt0dhj3o2F6-U08",
  authDomain: "wku-gibi-gubaye.firebaseapp.com",
  projectId: "wku-gibi-gubaye",
  storageBucket: "wku-gibi-gubaye.firebasestorage.app",
  messagingSenderId: "243668062502",
  appId: "1:243668062502:web:23ada282a8c0919baf71e7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);