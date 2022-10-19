import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Items/ItemList";
import { Spiner } from "../Spiner";


const ItemListContainer = (props) => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();
/* 👆 Lo mismo pero con destructuracion
  const parametros = useParams(); 
  console.log(parametros.idCategory);*/

  const URL_BASE = "https://clasificadoscolombia.co/wp-json/jhoespana/v1/tienda";
  const URL_CATEGORY = `${URL_BASE}/categoria/${idCategory}` 
  
  useEffect (() => {
    const getProducts = async () => {
      try{      
        const res = await fetch (idCategory?URL_CATEGORY:URL_BASE)
        const data = await res.json();
        setProducts(data);
      }
      catch{
        console.log("Error");
      }finally{
        setLoading(false);
      }
    };
    getProducts();
  }, [idCategory]);

  return(
    <div className="itemListContainer_container">
      <h1 style={style.itemListContainerH1}><span style={style.itemListContainerSpan}>Bienvenid@</span> {props.showGreeting}</h1>
      {loading ? <Spiner />
              : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;

// estilos dentro del componente :art:
const style = {
  itemListContainerH1:{
    textAlign: 'center',
    marginTop: 30,
  },
  itemListContainerSpan:{
    color: '#B11B1B',
  }
}