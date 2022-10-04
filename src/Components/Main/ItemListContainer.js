import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {

  const onAdd = (count) => {
    console.log(`El usuario quiere agregar ${count} productos`);
  }

  return(
    <div>
      <h1 style={style.itemListContainerH1}><span style={style.itemListContainerSpan}>Bienvenid@</span> {props.showGreeting}</h1>
      <ItemCount 
        stock={6}
        initial={1}
        onAdd={onAdd}/>
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