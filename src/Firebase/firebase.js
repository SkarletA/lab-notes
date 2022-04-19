export { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";

export {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";


export {
  getFirestore,
  addDoc,
  collection,

} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-firestore.js";