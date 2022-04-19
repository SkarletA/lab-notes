import { initializeApp } from './firebase.js';
import {getFirestore} from './firebase.js';


const firebaseConfig = {
  apiKey: 'AIzaSyD5VQQ8kNNsmzpvfPqDjjp-jzSTjYLhAwQ',
  authDomain: 'blogsks-73d09.firebaseapp.com',
  projectId: 'blogsks-73d09',
  storageBucket: 'blogsks-73d09.appspot.com',
  messagingSenderId: '332161822860',
  appId: '1:332161822860:web:a9f12c05074c4bc314cba9',
  measurementId: 'G-VQF6RLVJXJ'
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);






