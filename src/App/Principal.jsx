import React from 'react';
import { Main } from '../Main/Main';
import { NavBar } from '../NavBar/NavBar';
import './App.module.css';

export function Principal() {
  return (
    <section>
      <NavBar />
      <Main />
    </section>
  );
}
