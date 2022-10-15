import React, { useEffect, useState } from "react";
import "../Spiner.css"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Spiner } from "../Spiner";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  
  const { idDetail } = useParams();

  const URL_BASE = "https://clasificadoscolombia.co/wp-json/jhoespana/v1/tienda";

  useEffect (() => {
    const getProduct = async () => {
      try{
        const res = await fetch (`${URL_BASE}/${idDetail}`)
        const data = await res.json();
        setProduct(data)
      }catch{
        console.log("Error");
      }finally{
        setLoading(false);
      }
    };
    getProduct();
  }, [idDetail]);
  
  return(
    <>
    {
      loading ? <Spiner />
              :<ItemDetail product={product} />
    }
    </>
  );

};

export default ItemDetailContainer;