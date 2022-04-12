import './App.css';
import React from "react";
import { Main } from '../Main/Main';
import { NavBar } from '../NavBar/NavBar';
// import { Login } from '../Login/Login';
import { Blog } from '../Blog/Blog';
import { app } from '../Firebase/firabaseconfig';
import { Register } from '../Register/Register';



// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import { Blog } from '../Blog/Blog';



function App() {
  const [user, setUser] = React.useState(null);
  return (
    <React.Fragment>
      <NavBar/>
      <Main/>

      {user ? <Blog/> : <Register setUser={setUser}/>}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>, */}

    </React.Fragment>
  );
}

export default App;
