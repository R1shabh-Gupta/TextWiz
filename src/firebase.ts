// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// apiKey: 'AIzaSyAVsAlunJrLbfypl8o_sKN5Lsj1XfKBqGg',
const firebaseConfig = {
  apiKey: 'AIzaSyAVsAlunJrLbfypl8o_sKN5Lsj1XfKBqGg',
  authDomain: 'textwiz-a8d79.firebaseapp.com',
  projectId: 'textwiz-a8d79',
  storageBucket: 'textwiz-a8d79.appspot.com',
  messagingSenderId: '488741519284',
  appId: '1:488741519284:web:1a8c9749ec5ecaf286fce1',
  measurementId: 'G-5V6HLRPVXV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
