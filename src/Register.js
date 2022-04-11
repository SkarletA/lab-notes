import React from "react";

export function Login() {
  return (
    <section className="register">
      <div className="popup">
        <div className="title">
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
          <button>Register</button>
        </form>
      </div>
    </section>
  );
}
