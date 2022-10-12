import React from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget"
import logostore from "../../assets/logostore.svg";

const NavBar = () => {
  
  // Arrays Menu
  const categorias = [
    { nombre:"Computadores", id:0, ruta:"/categoria/computadores"},
    { nombre:"Consolas", id:1, ruta:"/categoria/consolas" },
    { nombre:"Accesorios", id:2, ruta:"/categoria/accesorios" },
    { nombre:"Contáctenos", id:3, ruta:"/categoria/contactenos" },
  ];

////

{/* <img src={require(`${img}`)} /> */}


  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img className="header__img" src={logostore} alt="logo tienda online" />
        </div>
      </Link>
      <nav>
        <ul className="header__nav__ul">
            {categorias.map((categoria) => {
              return <NavLink to={categoria.ruta} key={categoria.id}>{categoria.nombre}</NavLink>
            })
          }
        </ul>
      </nav>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </header>
  );
};

export default NavBar;