/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import { Login } from '../Login/Login';
import style from './NavBar.module.css';
import { Register } from '../Register/Register';

// eslint-disable-next-line jsx-a11y/anchor-is-valid
export function NavBar() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
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
            onClick={() => { setOpenModalRegister(true); }}
            className={style.linkRegister}
          >
            REGISTER
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => { setOpenModal(true); }}
            className={style.linkLogin}
          >
            LOGIN
          </button>
        </li>
      </ul>
      <Login
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <Register
        openModalRegister={openModalRegister}
        closeModalRegister={() => setOpenModalRegister(false)}
      />
    </nav>
  );
}
