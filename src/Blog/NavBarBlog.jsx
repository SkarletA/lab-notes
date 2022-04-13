import React from "react";
import { logOut } from "../Firebase/firebase-auth";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import iconLogOut from "../img/Log_Out.svg"
import './NavBarBlog.css';


export function NavBarBlog() {
  const navigate = useNavigate();
  const btnLogout = (e) => {
    e.preventDefault();
    logOut();
    navigate('/');
  }
    
  return (
    <nav>
      <ul className="navbar">
      <ul className="logo-title">
        <img className="logo" src="https://svgshare.com/i/g5e.svg" alt="logo"/>
        <h1 className="title-app">BlogSks</h1>
      </ul>
        <li>
          <button onClick={btnLogout} className="logout"><img className="icon-logout" src={iconLogOut} alt='icon-logout'/>LogOut</button>
          </li>
      </ul>
    </nav>
  )
}