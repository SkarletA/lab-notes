import './App.css';
import React from "react";
import { Main } from './Main';
import { NavBar } from './NavBar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Main/>
    </React.Fragment>
  );
}

export default App;
