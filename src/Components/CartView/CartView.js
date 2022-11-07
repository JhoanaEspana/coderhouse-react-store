import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
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
      <div>
        <h4>Genial!, Gracias por tu compra.</h4>
        <p>
          El ID de tu compra es: <span>{buyId}</span>
        </p>
        <Link to='/'>Ir a la tienda</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
    <>
      <p>El carrito esta vacio</p>
      <Link to='/'>Ir a la tienda</Link>
    </>
    );
  } else {

  return (
    <div>
      <div>
        {cart.map((product) => (
        <CartItem key={product.id} product={product} />))}
        <p>Total: {total}</p>
        <button onClick={() => clear()}>Vaciar carrito</button>
      </div>
      <div>
        <h2>Detalle de tu pago</h2>
        <Form cart={cart} total={total} clear={clear} tomarId={tomarId} />
      </div>
    </div>
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