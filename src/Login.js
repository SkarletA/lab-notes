import React from 'react';
import icon from './img/icon-google(1).svg'

export function Login() {
  return (
    <section className='login'>
      <div className='popup'>
      <div className="title">
          <p>Login in</p>
          <h3>BlogSks</h3>
        </div>
        <form className='form-login'>
          <input className='input-email' type='email' placeholder='Email: '/>
          <input className='input-password' type='password'placeholder='Password: '/>
          <button>Login</button>
          <button>Login con 
            <img src={icon} alt='icon-google' />
          </button>
        </form>
      </div>

    </section>
  );
}

