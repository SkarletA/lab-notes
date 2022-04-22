/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../Firebase/firebase-auth';
// import { Link } from "react-router-dom";

import iconLogOut from '../img/Log_Out.svg';
import style from './NavBarBlog.module.css';

const NavBarBlog = ({ onClickButton }) => {
  const navigate = useNavigate();
  const handlerLogout = () => {
    logOut();
    navigate('/');
    onClickButton();
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
            onClick={handlerLogout}
            className={style.btnLogout}
          >
            <img className={style.iconLogOutC} src={iconLogOut} alt="icon-logout" />
            LogOut
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default NavBarBlog;
