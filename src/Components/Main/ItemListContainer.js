import React from "react";

const ItemListContainer = (props) => {
  return(
    <h1 style={style.itemListContainerH1}><spam style={style.itemListContainerSpam}>Bienvenid@</spam> {props.showGreeting}</h1>
  );
};

export default ItemListContainer;

const style = {
  itemListContainerH1:{
    textAlign: 'center',
    marginTop: 30,
  },
  itemListContainerSpam:{
    color: '#B11B1B',
  }
}