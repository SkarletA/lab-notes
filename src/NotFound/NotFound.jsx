/* eslint-disable arrow-body-style */
import React from 'react';
import NavBarBlog from '../Blog/NavBarBlog';
import icon404 from '../img/404-not-found.svg';
import style from './NotFound.module.css';

const NotFound = () => {
  return (
    <section>
      <NavBarBlog />
      <section className={style.NotFound}>
        <img src={icon404} alt="img-not-found" />
      </section>
    </section>
  );
};

export default NotFound;
