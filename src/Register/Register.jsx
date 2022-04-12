import React from "react";
import { useNavigate } from "react-router-dom";
import { registration } from "../Firebase/firebase-auth";
import './Register.css';



export function Register({openModalRegister, closeModalRegister}){
  const navigate = useNavigate();

  if (!openModalRegister) return null

  const submitRegistration = async (e) => {
    e.preventDefault();
    const expEmail = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    const expPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    const email = document.getElementById('emailR').value;
    const password = document.getElementById('passwordR').value;
    if (expEmail.test(email) && expPassword.test(password)) {
      const user = await registration(email, password);
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
        <form className="form-register" onClick={submitRegistration}>
          <input className="input-email" id="emailR" type="email" placeholder="Email: " />
          <input
            className="input-password"
            id="passwordR"
            type="password"
            placeholder="Password: "
          />
          <span id="alertEmailR" className="red"></span>
          <button className="btn-register">Register</button>
        </form>
      </div>
    </section>
  );
}
