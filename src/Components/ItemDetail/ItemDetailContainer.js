import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { Spiner } from "../Spiner/Spiner";
import { getDoc, collection, doc } from "firebase/firestore"
import { db } from "../../firebase/firebase" 

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  
  const { idDetail } = useParams();

  useEffect (() => {
    const productCollection = collection( db, 'productos');
    const refDoc = doc(productCollection, idDetail)

    const getProduct = async () => {
      try{
        const res = await getDoc(refDoc);
        const dataDoc = {
          id: res.id,
          ...res.data()
        };
        setProduct(dataDoc)
      }catch(error){
        console.log(error);
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