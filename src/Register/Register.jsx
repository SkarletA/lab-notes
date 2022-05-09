import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from 'firebase/auth';
import style from './Register.module.css';
import { app } from '../Firebase/firebaseconfig';
import icon from '../img/icon-google.svg';

// eslint-disable-next-line react/prop-types
export function Register({ openModalRegister, closeModalRegister }) {
  const navigate = useNavigate();

  const auth = getAuth(app);
  auth.languageCode = 'in';
  const provider = new GoogleAuthProvider();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!openModalRegister) return null;

  const google = async (e) => {
    e.preventDefault();
    const userGoogle = await signInWithPopup(auth, provider);
    if (!userGoogle) {
      const alertGoogle = document.getElementById('alertGoogle');
      alertGoogle.innerHTML = '<span class="red"> failed to login</span>';
    } else {
      navigate('/blog', { replace: true });
    }
  };

  const updateUsers = async (userName) => {
    await updateProfile(auth.currentUser, {
      displayName: userName,
    });
  };
  console.log(name);

  const submitRegistration = async (e) => {
    e.preventDefault();
    const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    const expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (expEmail.test(email) && expPassword.test(password)) {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      navigate('/blog', { replace: true });
    } else {
      const alertEmailR = document.getElementById('alertEmailR');
      alertEmailR.innerHTML = '<span class="red"> Email or password invalid </span>';
    }
    await updateUsers(name);
  };
  return (
    <section
      className={style.register}
    >
      <div className={style.popup}>
        <button
          type="button"
          className={style.btnClose}
          onClick={closeModalRegister}
        >
          X
        </button>
        <div className={style.title}>
          <p>Create an account</p>
          <h3>BlogSks</h3>
          <p>it is easy and simple</p>
        </div>
        <form className={style.formRegister}>
          <input
            className={style.inputName}
            id="inputName"
            type="text"
            placeholder="Name: "
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={style.inputEmail}
            id="emailR"
            type="email"
            placeholder="Email: "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={style.inputPassword}
            id="passwordR"
            type="password"
            placeholder="Password: "
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            id="alertEmailR"
            className={style.red}
          />
          <button
            type="button"
            className={style.btnRegister}
            onClick={submitRegistration}
          >
            Register
          </button>
          <button
            type="button"
            onClick={google}
            className={style.btnGoogle}
          >
            Register with
            <img className={style.iconGoogle} src={icon} alt="icon-google" />
          </button>
        </form>
      </div>
    </section>
  );
}
