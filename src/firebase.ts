// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// apiKey: 'AIzaSyAVsAlunJrLbfypl8o_sKN5Lsj1XfKBqGg',
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: 'textwiz-a8d79',
  storageBucket: 'textwiz-a8d79.appspot.com',
  messagingSenderId: '488741519284',
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
