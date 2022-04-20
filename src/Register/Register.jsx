/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import { getAuth } from 'firebase/auth';
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
      const user = await createUserWithEmailAndPassword(email, password);
      navigate('/blog');
      console.log(user);
    } else {
      const alertEmailR = document.getElementById('alertEmailR');
      alertEmailR.innerHTML = '<span class="red"> Email or password invalid </span>';
    }
  };
  return (
    <section
      className="register"
    >
      <div className="popup">
        <button
          type="button"
          className="btn-close"
          onClick={closeModalRegister}
        >
          X
        </button>
        <div className="title">
          <p>Create an account</p>
          <h3>BlogSks</h3>
          <p>it is easy and simple</p>
        </div>
        <form className="form-register">
          <input
            className="input-email"
            id="emailR"
            type="text"
            placeholder="Name: "
            // onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            className="input-email"
            id="emailR"
            type="email"
            placeholder="Email: "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-password"
            id="passwordR"
            type="password"
            placeholder="Password: "
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            id="alertEmailR"
            className="red"
          />
          <button
            type="button"
            className="btn-register"
            onClick={submitRegistration}
          >
            Register
          </button>
          <button
            type="button"
            onClick={google}
            className="btn-google"
          >
            Register with
            <img className="icon-google" src={icon} alt="icon-google" />
          </button>
        </form>
      </div>
    </section>
  );
}
