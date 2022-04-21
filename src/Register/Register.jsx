/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import style from './Register.module.css';
import { loginGoogle } from '../Firebase/firebase-auth';
import { app } from '../Firebase/firebaseconfig';
import '../Firebase/firebase';
import icon from '../img/icon-google(1).svg';

// eslint-disable-next-line react/prop-types
export function Register({ openModalRegister, closeModalRegister }) {
  const navigate = useNavigate();

  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    return (
      <div>
        <p>
          Error:
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
          Registered User:
          {user.email}
        </p>
      </div>
    );
  }

  if (!openModalRegister) return null;

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

  const submitRegistration = async (e) => {
    e.preventDefault();
    const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    const expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (expEmail.test(email) && expPassword.test(password)) {
      // eslint-disable-next-line no-shadow
      await createUserWithEmailAndPassword(email, password);
      navigate('/blog');
    } else {
      const alertEmailR = document.getElementById('alertEmailR');
      alertEmailR.innerHTML = '<span class="red"> Email or password invalid </span>';
    }
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
            id="emailR"
            type="text"
            placeholder="Name: "
            // onChange={(e)=> setEmail(e.target.value)}
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
