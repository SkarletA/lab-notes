import React from 'react';
import { Main } from '../Main/Main';
import { NavBar } from '../NavBar/NavBar';
import './App.module.css';

export function Home() {
  return (
    <section>
      <NavBar />
      <Main />
    </section>
  );
}
