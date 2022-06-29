/* eslint-disable import/extensions */
import { initializeApp, getFirestore } from './firebase.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBmfekLPUizLaV1aL9aaxunVuosgav80Y8',
  authDomain: 'blogsks-49a2d.firebaseapp.com',
  projectId: 'blogsks-49a2d',
  storageBucket: 'blogsks-49a2d.appspot.com',
  messagingSenderId: '1035768893611',
  appId: '1:1035768893611:web:0dfa0aebf8c0d8a9a9a7ee',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
