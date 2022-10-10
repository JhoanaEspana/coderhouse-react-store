import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({});


  useEffect (() => {
    const getProduct = async () => {
      try{
        const res = await fetch ("https://clasificadoscolombia.co/wp-json/jhoespana/v1/tienda/96")
        const data = await res.json();
        setProduct(data)
      }catch{
        console.log("Error");
      }finally{
        console.log("Hecho");
      }
    };
    getProduct();
  }, []);
  
  return(
    <>
      <ItemDetail product={product} />
    </>
  );

};

export default ItemDetailContainer;

