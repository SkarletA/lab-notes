import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './Register.css';

import "../Firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebaseconfig";

export function Register({openModalRegister, closeModalRegister}){
  const navigate = useNavigate();
  
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }

  if (!openModalRegister) return null

  const submitRegistration = async (e) => {
    e.preventDefault();
    const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    const expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if (expEmail.test(email) && expPassword.test(password)) {
      const user = await createUserWithEmailAndPassword(email, password);
      navigate('/blog');
      console.log(user);
    } else {
      const alertEmailR = document.getElementById('alertEmailR');
      alertEmailR.innerHTML = '<span class="red"> Email or password invalid </span>';
    }
    
  }
  return (
    <section className ="register">
      <div className ="popup">
      <button onClick={closeModalRegister} className ='btn-close'>X</button>
        <div className ="title">
          <p>Create an account</p>
          <h3>BlogSks</h3>
          <p>it is easy and simple</p>
        </div>
        <form className="form-register">
          <input className="input-email" 
          id="emailR" 
          type="email" 
          placeholder="Email: " 
          onChange={(e)=> setEmail(e.target.value)}/>
          <input
            className="input-password"
            id="passwordR"
            type="password"
            placeholder="Password: "
            onChange={(e)=> setPassword(e.target.value)}
          />
          <span id="alertEmailR" className="red"></span>
          <button className="btn-register" 
          onClick={submitRegistration}
          >Register</button>
        </form>
      </div>
    </section>
  );
}
