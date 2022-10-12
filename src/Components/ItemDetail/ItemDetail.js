import React from "react";

const ItemDetail = ({ product }) => {

  return (
    <div>
      <figure>
        <img src={product["imagen-de-portada"]} alt="" />
      </figure>
      <h3>{product.titulo}</h3>
      <p>categoria: {product.categoria}</p>
      <p>stock: {product.stock}</p>
      <p>{product["descripción"]}</p>
      <p>$ {product.precio}</p>
      <a href="#">AGREGAR AL CARRITO</a>
      
      <div>
      {product.galeria?.map((imagen, index) => {
        return <figure key={index}><img src={imagen} alt="" /></figure>
      })}
      </div>
    </div>
  );
};

export default ItemDetail;