import React, {useState} from 'react';
import { loginGoogle } from '../Firebase/firebase-auth';
import { useNavigate } from "react-router-dom";
import icon from '../img/icon-google(1).svg';
import './Login.css'; 
import { getAuth} from "firebase/auth";
import { app } from "../Firebase/firebaseconfig";
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';


export function Login({openModal, closeModal}) {
  const navigate = useNavigate();
  const auth = getAuth(app);
  // const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <p>{error.message} </p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  
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
    
    if (expEmail.test(email) && expPassword.test(password)) {
      const logeduser = await signInWithEmailAndPassword(email, password);
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
          <input 
          className='input-email' 
          id="emailLogin" 
          type='email' placeholder='Email: '
          onChange={(e)=> setEmail(e.target.value)}
          />
          <input 
          className='input-password' 
          id="passwordLogin" 
          type='password'placeholder='Password: '
          onChange= {(e)=> setPassword(e.target.value)}
          />
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

