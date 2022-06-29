/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
export { initializeApp } from 'firebase/app';
// https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js

export {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

export {
  getFirestore,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
  getDoc,
  onSnapshot,
  collection,
  addDoc,
  query,
  where,
} from 'firebase/firestore';
