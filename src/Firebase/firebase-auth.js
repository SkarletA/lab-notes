import { app } from "./firabaseconfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "./firebase";

// eslint-disable-next-line no-unused-expressions
app;
const auth = getAuth();
const provider = new GoogleAuthProvider();

auth.languageCode = 'es';

export async function loginGoogle() {
  let results;
  await signInWithPopup(auth, provider)
    .then((result) => {
      results = result;
    })
    .catch((error) => {
      const errorMsg = error.message;
      console.log(errorMsg);
      results = false;
    });
  return results;
}

export async function registration(email, password) {
  let user;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      const errorMsg = error.message;
      console.log(errorMsg);
      user = null;
    });
  return user;
}

export async function signIn(email, password) {
  let user;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
    })
    .catch((error) => {
      const errorMsg = error.message;
      console.log(errorMsg);
      user = null;
    });
  return user;
}

export async function logOut() {
  let resultLogOut;
  await signOut(auth)
    .then(() => {
      resultLogOut = true;
    })

    .catch(() => {
      resultLogOut = false;
    });
  return resultLogOut;
}