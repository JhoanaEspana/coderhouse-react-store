import React, {useContext} from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ product }) => {

  const { deleteItem } = useContext(CartContext);

  return (
    <div>
      <img src={product["imagen-de-portada"]} alt="" />
      <div>
        <h3>{product.titulo}</h3>
        <p>Cantidad: {product.cantidad}</p>
        <p>Precio u.: {product.precio}</p>
        <p>Subtotal: $ {product.cantidad * product.precio}</p>
        <button onClick={() => deleteItem(product.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem