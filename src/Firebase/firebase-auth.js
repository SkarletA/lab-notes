import { app } from "./firebaseconfig";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "./firebase";


// eslint-disable-next-line no-unused-expressions
app;
const auth = getAuth();
const provider = new GoogleAuthProvider();

auth.languageCode = 'es';

export async function loginGoogle() {
  let credential;
  await signInWithPopup(auth, provider)
    .then((result) => {
      credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMsg = error.message;
      const errorEmail = error.email;
      credential = GoogleAuthProvider.credentialFromError(error);
    });
  return credential;
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