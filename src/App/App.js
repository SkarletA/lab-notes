import './App.css';
import React from "react";
import { Main } from '../Main/Main';
import { NavBar } from '../NavBar/NavBar';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";



function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Main/>
    </React.Fragment>
  );
}

export default App;
