import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {

  const [count, setCount] = useState(initial);

  const subtract = () => {
    if(count > 1){
      setCount(count - 1)
    }
  }

  const add = () => {
    if(count < stock){
      setCount(count + 1);
    }
  }


  return(
    <>
    <div className="itemCount__count__container">
      <button className="itemCount__count__btn" onClick={subtract}>-</button>
      <p>{count}</p>
      <button className="itemCount__count__btn" onClick={add}>+</button>
    </div>
    <div className="itemCount__btn__add">
      <button disabled={stock === 0} onClick={()=>onAdd(count)}>
        <span>{stock === 0 ? "No hay stock" : "Agregar al carrito"}</span>
      </button>
    </div>
    </>
  );
};

export default ItemCount;