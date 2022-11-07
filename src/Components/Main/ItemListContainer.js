import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../Items/ItemList";
import { Spiner } from "../Spiner/Spiner";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams();

  useEffect(() => {
    const productCollection = collection(db, "productos");
    const q = idCategory
      ? query(productCollection, where("categoria", "==", idCategory))
      : productCollection;

    const getProducts = async () => {
      try {
        const res = await getDocs(q);
        const dataDocs = res.docs.map((item) => {
          return {
            id: item.id,
            ...item.data(),
          };
        });
        setProducts(dataDocs);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [idCategory]);

  return (
    <div className="itemListContainer_container">
      <h1 style={style.itemListContainerH1}>
        <span style={style.itemListContainerSpan}>Bienvenid@</span>{" "}
        {props.showGreeting}
      </h1>
      {loading ? <Spiner /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;

// estilos dentro del componente :art:
const style = {
  itemListContainerH1: {
    textAlign: "center",
    marginTop: 30,
  },
  itemListContainerSpan: {
    color: "#B11B1B",
  },
};
