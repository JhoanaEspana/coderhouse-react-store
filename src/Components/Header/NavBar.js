import React from "react";
import "./NavBar.css";
import { CartWidget } from "./CartWidget"
import logostore from "../../assets/logostore.svg";

const NavBar = () => {
  
  // Arrays Menu
  const navMenus = [
    { nombre: "Computadores", id: 8, ruta: "#" },
    { nombre: "Consolas", id: 9, ruta: "#" },
    { nombre: "Accesorios", id: 10, ruta: "#" },
    { nombre: "Contáctenos", id: 11, ruta: "#" },
  ];

////

{/* <img src={require(`${img}`)} /> */}


  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__img" src={logostore} alt="logo tienda online" />
      </div>
      <nav>
        <ul className="header__nav__ul">
          {navMenus.map((navMenu) => {
            return <li key={navMenu.id} className="header__nav__li"><a href={navMenu.ruta}> {navMenu.nombre}</a></li>
          })}
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;