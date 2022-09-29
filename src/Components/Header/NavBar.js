import React, { useState } from "react";
import "./NavBar.css";
import { CartWidget } from "./CartWidget"
import logostore from "../../assets/logostore.svg";

// Arrays Categorias
const NavBar = () => {

  const [showH, setShowH] = useState(false);
  const [showM, setShowM] = useState(false);

  const categoriasHombre = [
    { nombre: "Polos", id: 0, ruta: "#" },
    { nombre: "Chaquetas", id: 1, ruta: "#" },
    { nombre: "Sudaderas", id: 0, ruta: "#" },
  ];

  const categoriasMujer = [
    { nombre: "Polos", id: 0, ruta: "#" },
    { nombre: "Pantalonetas", id: 1, ruta: "#" },
    { nombre: "Buzos", id: 0, ruta: "#" },
  ];
////

  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__img" src={logostore} alt="logo tienda online" />
      </div>
      <nav>
        <ul className="header__nav__ul">
          <li><a href="#">Colecciones</a></li>
          <li className="header__nav__li">
            <a href="#" onClick={() => setShowH(!showH)}>Hombre</a>

            {showH &&
            <div className="header__nav__dropdown" >
              {categoriasHombre.map((categoriaHombre) => {
                  return <li><a key={categoriaHombre.id} href={categoriaHombre.ruta}> {categoriaHombre.nombre}</a></li>
              })}
            </div>
            }

          </li>
          <li>
            <a href="#" onClick={() => setShowM(!showM)}>Mujer</a>
            {showM &&
            <div className="header__nav__dropdown">
              {categoriasMujer.map((categoriaMujer) => {
                  return <li><a key={categoriaMujer.id} href={categoriaMujer.ruta}>{categoriaMujer.nombre}</a></li>
              })}
            </div>
            }

          </li>
          <li><a href="#">Contáctanos</a></li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default NavBar;