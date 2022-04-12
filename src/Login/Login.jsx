import React from 'react';
import { loginGoogle, signIn } from '../Firebase/firebase-auth';
import { useNavigate } from "react-router-dom";
import icon from '../img/icon-google(1).svg';
import './Login.css'; 


export function Login({openModal, closeModal}) {
  const navigate = useNavigate();
  if (!openModal) return null
  const google = async (e) => {
    e.preventDefault();
    const userGoogle = await loginGoogle();
    if (!userGoogle) {
      const alertGoogle = document.getElementById('alertGoogle');
      alertGoogle.innerHTML = '<span class="red"> failed to login</span>';
    } else {
      navigate('/blog');
    }
  }

  const loginIn = async (e) => {
    e.preventDefault();
    const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    const expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    if (expEmail.test(email) && expPassword.test(password)) {
      const logeduser = await signIn(email, password);
      navigate('/blog');
      console.log('usuario registrado', logeduser);
    } else {
      const alertEmailR = document.getElementById('alert');
      alertEmailR.innerHTML = '<span class="red"> Email or password invalid </span>';
    }
  }
  return (
    <section className='login'>
      <div className='popup'>
        <button className='btn-close'
        onClick={closeModal}
        >X</button>
        <div className="title">
          <p>Login in</p>
          <h3>BlogSks</h3>
        </div>
        <form className='form-login'>
          <input className='input-email' id="emailLogin" type='email' placeholder='Email: '/>
          <input className='input-password' id="passwordLogin" type='password'placeholder='Password: '/>
          <span id="alert" className="red"></span>
          <button onClick={loginIn} className='btn-login'>Login</button>
          <button onClick={google} className='btn-google'>Login with
            <img className='icon-google' src={icon} alt='icon-google' />
          </button>
          <span id="alertGoogle" className='red'></span>
        </form>
      </div>
    </section>
  );
}

