import React, { useState } from 'react';
import icon from '../img/icon-google(1).svg';
import './Login.css'; 



export function Login({openModal, closeModal}) {
  if (!openModal) return null
  
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
          <input className='input-email' type='email' placeholder='Email: '/>
          <input className='input-password' type='password'placeholder='Password: '/>
          <button className='btn-login'>Login</button>
          <button className='btn-google'>Login with
            <img className='icon-google' src={icon} alt='icon-google' />
          </button>
        </form>
      </div>
    </section>
  );
}

