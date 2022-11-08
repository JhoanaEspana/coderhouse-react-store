import React, {useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import "./CartItem.css";

const CartItem = ({ product }) => {

  const { deleteItem } = useContext(CartContext);

  return (
      <div className="cartitem__container">
        <div className="cartitem__container__img">
          <img src={product["imagen-de-portada"]} alt="" />
          <h3>{product.titulo}</h3>
        </div>
        <div className="cartitem__container__detail">
          <p>Cantidad: {product.cantidad}</p>
          <p>Precio u.: {product.precio}</p>
          <p>Subtotal: $ {product.cantidad * product.precio}</p>
          <button className="cartitem__btn" onClick={() => deleteItem(product.id)}>Eliminar</button>
        </div>
      </div>
  )
}

export default CartItem