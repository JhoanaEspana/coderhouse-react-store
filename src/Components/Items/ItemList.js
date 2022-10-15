import React from "react";
import Item from "./Item";
import "./ItemList.css"

const ItemList = ({ products }) => {
  return (
    <div className="itemList__container">
      {products.map((products) => {
        return <Item key={products.id} products={products} />;
      })}
    </div>
  );
};

export default ItemList;
