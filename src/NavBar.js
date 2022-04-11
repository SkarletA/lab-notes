import React from "react";
import './NavBar.css';

// eslint-disable-next-line jsx-a11y/anchor-is-valid
export function NavBar() {
  // const [login, setlogin] = useState(false);
  // const toggleLogin = () => {
  //   setlogin();
  // }
  return (
    <ul className="navbar">
      <ul className="logo-title">
        <img className="logo" src="https://svgshare.com/i/g5e.svg" alt="logo"/>
        <h1 className="title-app">BlogSks</h1>
      </ul>
      <li><button className="btn-register">REGISTER</button></li>
      <li><button className="btn-login">LOGIN</button></li>
    </ul>

  );


}