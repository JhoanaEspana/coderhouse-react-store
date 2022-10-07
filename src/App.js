import React from "react";
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Main/ItemListContainer"

const App = () => {

  const greeting = "OFERTAS - DESCUENTOS EN TODO EL SITIO";
  
  return (
    <>
      <NavBar />
      <ItemListContainer showGreeting={greeting}/>
      
    </>
  );
};


export default App;