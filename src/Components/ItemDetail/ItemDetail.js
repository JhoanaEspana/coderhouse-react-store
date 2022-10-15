import React from "react";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({product }) => {

  const onAdd = (count) => {
    console.log(`El usuario quiere agregar ${count} productos`);
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
        <p className="stock">Stock: {product.stock}</p>
        <p className="ItemDetail__descripcion"><span className="descripcion">Descripción:</span> {product["descripción"]}</p>
        <ItemCount stock={6} initial={1} onAdd={onAdd}/>
          <div className="ItemDetail__galery">

          {/* {product.galeria?.map((imagen, index) */}
            {product.galeria.map((imagen, index) => {
              return <img key={index} src={imagen} alt="" />
            })}
          </div>
      </div>
    </div>
  );
};

export default ItemDetail;