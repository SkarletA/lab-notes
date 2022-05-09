/* eslint-disable import/prefer-default-export */
import React from 'react';
import image from '../img/image-principal.svg';
import style from './Main.module.css';

export function Main() {
  return (
    <section className={style.sectionSlogan}>
      <h2 className={style.slogan}>Write about what you like and passionate</h2>
      <p className={style.sloganSecond}>Create an attractive and original blog</p>
      <div>
        <img className={style.imgPrincipal} src={image} alt="img-principal" />
      </div>
    </section>
  );
}
