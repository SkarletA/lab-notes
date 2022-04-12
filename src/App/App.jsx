import './App.css';
import React from "react";
import { Main } from '../Main/Main';
import { NavBar } from '../NavBar/NavBar';
// import { Login } from '../Login/Login';
import { Blog } from '../Blog/Blog';
import { Register } from '../Register/Register';




function App() {
  const [user, setUser] = React.useState(null);
  return (
    <React.Fragment>
      <NavBar/>
      <Main/>

      {user ? <Blog/> : <Register setUser={setUser}/>}


    </React.Fragment>
  );
}

export default App;
