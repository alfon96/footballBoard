// Firebase.js (o il nome del file che preferisci per la configurazione di Firebase)

import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  update,
  remove,
} from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_DB_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const createPlayer = (player) => {
  const playersRef = ref(database, "players");
  const newPlayerRef = push(playersRef);
  set(newPlayerRef, player);
};

export const getPlayers = () => {
  const playersRef = ref(database, "players");
  return get(playersRef).then((snapshot) => {
    if (snapshot.exists()) {
      // Combine each player's data with its key (ID)
      return Object.entries(snapshot.val()).map(([key, value]) => {
        return { id: key, ...value };
      });
    } else {
      return []; // Returns an empty array if there are no data
    }
  });
};

export const updatePlayer = (id, updatedPlayer) => {
  const playerRef = ref(database, `players/${id}`);
  return update(playerRef, updatedPlayer);
};

export const deletePlayer = (id) => {
  const playerRef = ref(database, `players/${id}`);
  return remove(playerRef);
};
