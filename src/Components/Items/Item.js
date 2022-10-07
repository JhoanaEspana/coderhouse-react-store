import React from "react";
import "./Item.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = ({products}) => {
  return (
    <div className="item__container">
      <figure className="item__img">
        <img src={products["imagen-de-portada"]} alt="" />
      </figure>
        <h3>{products.titulo}</h3>
        <p className="item__categoria">Categoría: {products.categoria}</p>
        <p className="item__precio">$ {products.precio}</p>
        <button><AddShoppingCartIcon className="item__btn_ico" />VER MÁS</button>
    </div>  
  )
}

export default Item;