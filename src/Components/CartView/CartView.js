import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import sadcel from "../../assets/sad-cel.png";
import happycel from "../../assets/happy-cel.png";
import "./CartView.css"
import CartItem from "./CartItem";
import Form from "../Form/Form";


export const CartView = () => {
  const { clear, cart, total } = useContext(CartContext);
  const [buyId, setBuyId] = useState("");

  const tomarId = (id) => {
    setBuyId(id);
  };

  if (buyId) {
    return (
      <div className="cartview_container">
        <div>
          <h2 className="cartview_h2">Genial!, Gracias por tu compra.</h2>
          <p className="cartview_text">El ID de tu compra es: <span>{buyId}</span></p>
          <Link to='/' className="cartview_button">Ir a la tienda</Link>
        </div>
        <div>
          <img className="cartview_img" src={happycel} alt="imagen de celular feliz" />
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
    <div className="cartview_container">
      <div>
        <h2 className="cartview_h2">El carrito esta vacío</h2>
        <Link to='/' className="cartview_button">Ir a la tienda</Link>
      </div>
      <div>
      <img className="cartview_img" src={sadcel} alt="imagen de celular triste" />
      </div>
    </div>
    );
  } else {

  return (
    <>
      <h2>Tu Orden</h2>
      <div className="cartview_container">
        <div className="cartview_container_cart">
          {cart.map((product) => (
          <CartItem key={product.id} product={product} />))}
          <p className="cartview_container_txt">Total: {total}</p>
          <button className="cartview_button delete" onClick={() => clear()}>Vaciar carrito</button>
        </div>
        <div className="form__container">
          <h2 className="form__txt">Detalle de tu pago</h2>
          <Form cart={cart} total={total} clear={clear} tomarId={tomarId} />
        </div>
      </div>
    </>
  )
}
}


 // esto es lo mismo que arriba 👆

/* if(cart.length === 0){
    return(
      <p>
        <p>El carrito esta vacio</p>
        <Link to='/'>Ir a la tienda</Link>
      </>
    )
  }

  return(
    <>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <p>Total: {total}</p>
      <button onClick={() => clear()}>Vaciar carrito</button>
    </>
  )}  */