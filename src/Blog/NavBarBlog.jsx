/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../Firebase/firebase-auth';
// import { Link } from "react-router-dom";

import iconLogOut from '../img/Log_Out.svg';
import style from './NavBarBlog.module.css';

export function NavBarBlog() {
  const navigate = useNavigate();
  const btnLogout = (e) => {
    e.preventDefault();
    logOut();
    navigate('/');
  };
  return (
    <nav>
      <ul className={style.navbar}>
        <ul className={style.logoTitle}>
          <img className={style.logo} src="https://svgshare.com/i/g5e.svg" alt="logo" />
          <h1 className={style.titleApp}>BlogSks</h1>
        </ul>
        <li>
          <button
            type="button"
            onClick={(e) => btnLogout(e)}
            className={style.btnLogout}
          >
            <img className={style.iconLogOut} src={iconLogOut} alt="icon-logout" />
            LogOut
          </button>
        </li>
      </ul>
    </nav>
  );
}
