import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB2I4O69wnDQ8_CUhnx4liXZIZFYMvNQBM",
  authDomain: "piece-of-art.firebaseapp.com",
  databaseURL: "https://piece-of-art-default-rtdb.firebaseio.com",
  projectId: "piece-of-art",
  storageBucket: "piece-of-art.appspot.com",
  messagingSenderId: "234310441588",
  appId: "1:234310441588:web:358c8fa7699576d9544f21",
  measurementId: "G-9BJSN8LG6L",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
