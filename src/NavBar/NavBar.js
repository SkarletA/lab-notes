import React, {useState} from "react";
import { Login } from "../Login/Login";
import './NavBar.css';
import { Register } from '../Register/Register';

// eslint-disable-next-line jsx-a11y/anchor-is-valid
export function NavBar() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalRegister, setOpenModalRegister] = useState(false);
  
  
  return (
    <>
    <ul className="navbar">
      <ul className="logo-title">
        <img className="logo" src="https://svgshare.com/i/g5e.svg" alt="logo"/>
        <h1 className="title-app">BlogSks</h1>
      </ul>
      <li><button onClick={()=> {setOpenModalRegister(true)}} className="link-register">REGISTER</button></li>
      <li><button
      onClick={()=> {setOpenModal(true)}} className="link-login">LOGIN</button></li>
    </ul>
    <Login openModal={openModal} closeModal={()=> setOpenModal(false)}/>
    <Register openModalRegister={openModalRegister} closeModalRegister={()=> setOpenModalRegister(false)}/>
    </>
    

  );


}