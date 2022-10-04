import React from "react";

const ItemListContainer = (props) => {
  return(
    <h1 style={style.itemListContainerH1}><span style={style.itemListContainerSpan}>Bienvenid@</span> {props.showGreeting}</h1>
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