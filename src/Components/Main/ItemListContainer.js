import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
import ItemList from "../Items/ItemList";
import "./ItemListContainer.css"


const ItemListContainer = (props) => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    const getProducts = async () => {
      try{      
        const res = await fetch ("https://clasificadoscolombia.co/wp-json/jhoespana/v1/tienda")
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
  }, []);

    const onAdd = (count) => {
    console.log(`El usuario quiere agregar ${count} productos`);
  }

  return(
    <div className="itemListContainer_container">
      <h1 style={style.itemListContainerH1}><span style={style.itemListContainerSpan}>Bienvenid@</span> {props.showGreeting}</h1>
      <ItemCount stock={6} initial={1} onAdd={onAdd}/>
      {loading ? (<div className="loader-container">
                    <div className="spinner"></div>
                  </div>)
              : <ItemList products={products} />}
      <ItemDetailContainer />
    </div>
  );
};

export default ItemListContainer;



const style = {
  itemListContainerH1:{
    textAlign: 'center',
    marginTop: 30,
  },
  itemListContainerSpan:{
    color: '#B11B1B',
  }
}