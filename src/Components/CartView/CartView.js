import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartItem from "./CartItem";


export const CartView = () => {
  const {clear, cart, total } = useContext(CartContext);

  if(cart.length === 0){
    return(
      <>
        <p>El carrito esta vacio</p>
        <Link to='/'>Ir a la tienda</Link>
      </>
    )
  }

  return(
    <>
      {
        cart.map(product => <CartItem key={product.id} product={product} />)
      }
      <p>Total: {total}</p>
      <button onClick={() => clear()}>Vaciar carrito</button>
    </>
  )
}