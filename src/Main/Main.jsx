/* eslint-disable import/prefer-default-export */
import React from 'react';
import image from '../img/image-principal.svg';
import './Main.css';

export function Main() {
  return (
    <section className="section-slogan">
      <h2 className="slogan">Write about what you like and passionate</h2>
      <p className="slogan-second">Create an attractive and original blog</p>
      <button
        type="button"
        className="create-blog"
      >
        CREATE A  BLOG
      </button>
      <div>
        <img className="img-principal" src={image} alt="img-principal" />
      </div>
    </section>
  );
}
