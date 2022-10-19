import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";


const ItemDetail = ({ product }) => {

  const [showItemCount, setShowItemCount] = useState(true);

  // const resultado = useContext(Context);
  const { addItem } = useContext(CartContext);

  const onAdd = ( count ) => {
    // resultado.addItem(product, count);
    addItem.addItem(product, count);
    setShowItemCount(false);
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
        {showItemCount ? (<ItemCount stock={product.stock} initial={1} onAdd={onAdd}/>)
                        : (
                        <Link to={'/cart'}>
                          <button>FINALIZAR COMPRA</button>
                        </Link>)}
          
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