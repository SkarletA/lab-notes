import React from "react";
import './Register.css';

export function Register({openModalRegister, closeModalRegister}){
  if (!openModalRegister) return null
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
          <input className="input-email" type="email" placeholder="Email: " />
          <input
            className="input-password"
            type="password"
            placeholder="Password: "
          />
          <button className="btn-register">Register</button>
        </form>
      </div>
    </section>
  );
}
