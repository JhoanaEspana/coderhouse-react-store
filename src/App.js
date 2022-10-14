import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Main/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import { Cart } from "./Components/CartView/Cart";
import Contact from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";

const App = () => {
  const greeting = "OFERTAS - DESCUENTOS EN TODO EL SITIO";

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer showGreeting={greeting} />}/>
          <Route path="/categoria/:idCategory" element={<ItemListContainer showGreeting={greeting} />} />
          <Route path="/producto/:idDetail" element={<ItemDetailContainer />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<ItemListContainer />}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;