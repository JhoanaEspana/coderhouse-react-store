import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";


const ItemDetail = ({ product }) => {

  const [showItemCount, setShowItemCount] = useState(false);
  // const resultado = useContext(Context);
  const { addItem, isInCart, cart } = useContext(CartContext);

  let stock = 0;
  if(isInCart(product.id)){
    const found = cart.find(item => item.id === product.id);
    stock = product.stock - found.cantidad;
  }else{
    stock = product.stock;
  }

  const onAdd = ( quantity ) => {
    // resultado.addItem(product, count);
    addItem(product, quantity);
    setShowItemCount(true);
  }

  return (
    <div className="ItemDetail__container">
      <div>
        <figure>
          <img src={product["imagen-de-portada"]} alt="" />
        </figure>
      </div>
      <div className="ItemDetail__content">
        <h3 className="ItemDetail__titulo">{product.titulo}</h3>
        <p className="ItemDetail__precio">$ {product.precio}</p>
        <p className="ItemDetail__text categoria">Categoría: {product.categoria}</p>
        <p className="stock">Stock: {stock}</p>
        <p className="ItemDetail__descripcion"><span className="descripcion">Descripción:</span> {product["descripción"]}</p>

        {!showItemCount ? <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                      : <Link to={'/cart'}><button className="itemDetail__btn"><AddShoppingCartIcon/>FINALIZAR COMPRA</button></Link>}
          

      </div>
    </div>
  );
};

export default ItemDetail;