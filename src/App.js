import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Main/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import { CartView } from "./Components/CartView/CartView";
import { Footer } from "./Components/Footer/Footer";
import { CustomProvider } from "./Context/CartContext";

const App = () => {
  const greeting = "OFERTAS - DESCUENTOS EN TODO EL SITIO";

  return (
      <CustomProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer showGreeting={greeting} />}/>
              <Route path="/categoria/:idCategory" element={<ItemListContainer showGreeting={greeting} />}/>
              <Route path="/producto/:idDetail" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<CartView />}/>
              <Route path="*" element={<ItemListContainer />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
      </CustomProvider>
  );
};

export default App;