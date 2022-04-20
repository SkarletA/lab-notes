import React from 'react';
import './App.css';
import { Main } from '../Main/Main';
import { NavBar } from '../NavBar/NavBar';
// import { Login } from '../Login/Login';
import { Blog } from '../Blog/Blog';
import { Register } from '../Register/Register';

function App() {
  const [user, setUser] = React.useState(null);
  return (
    <>
      <NavBar />
      <Main />
      {user ? <Blog /> : <Register setUser={setUser} />}
    </>
  );
}

export default App;
