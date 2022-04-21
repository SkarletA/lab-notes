/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { loginGoogle } from '../Firebase/firebase-auth';
import icon from '../img/icon-google(1).svg';
import style from './Login.module.css';
import { app } from '../Firebase/firebaseconfig';

// eslint-disable-next-line import/prefer-default-export
export function Login({ openModal, closeModal }) {
  const navigate = useNavigate();
  const auth = getAuth(app);
  // const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  // const [
  //   signInWithGoogle,
  // ] = useSignInWithGoogle(auth);

  if (error) {
    return (
      <div>
        <p>
          {error.message}
        </p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>
          Signed In User:
          {user.email}
        </p>
      </div>
    );
  }

  if (!openModal) return null;

  const google = async (e) => {
    e.preventDefault();
    const userGoogle = await loginGoogle();
    if (!userGoogle) {
      const alertGoogle = document.getElementById('alertGoogle');
      alertGoogle.innerHTML = '<span class="red"> failed to login</span>';
    } else {
      navigate('/blog');
    }
  };

  const loginIn = async (e) => {
    e.preventDefault();
    const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    const expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

    if (expEmail.test(email) && expPassword.test(password)) {
      await signInWithEmailAndPassword(email, password);
      navigate('/blog');
    } else {
      const alertEmailR = document.getElementById('alert');
      alertEmailR.innerHTML = '<span class="red"> Email or password invalid </span>';
    }
  };

  return (
    <section
      className={style.login}
    >
      <div className={style.popup}>
        <button
          type="button"
          className={style.btnClose}
          onClick={closeModal}
        >
          X
        </button>
        <div className={style.title}>
          <p>Login in</p>
          <h3>BlogSks</h3>
        </div>
        <form className={style.formLogin}>
          <input
            className={style.inputEmail}
            id="emailLogin"
            type="email"
            placeholder="Email: "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={style.inputPassword}
            id="passwordLogin"
            type="password"
            placeholder="Password: "
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            id="alert"
            className={style.red}
          />
          <button
            type="button"
            onClick={loginIn}
            className={style.btnLogin}
          >
            Login
          </button>
          <button
            type="button"
            onClick={google}
            className={style.btnGoogle}
          >
            Login with
            <img className={style.iconGoogle} src={icon} alt="icon-google" />
          </button>
          <span
            id="alertGoogle"
            className={style.red}
          />
        </form>
      </div>
    </section>
  );
}
