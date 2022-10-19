import React, {useContext} from "react";
import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { grey } from "@mui/material/colors";
import { CartContext } from "../../Context/CartContext";


export const CartWidget = () => {
  const {qty} = useContext(CartContext)

  return (
    <div className="header__cart">
      <ShoppingCartIcon sx={{ color: grey[50] }} fontSize="small" />
      <p>{qty}</p>
    </div>
  );
};