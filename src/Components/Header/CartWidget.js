import React, {useContext} from "react";
import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { grey } from "@mui/material/colors";
import { CartContext } from "../../Context/CartContext";


export const CartWidget = () => {
  const { cantidad } = useContext(CartContext)

  return (
    <div className="CartWidget__header">
      <ShoppingCartIcon sx={{ color: grey[50] }} fontSize="small" />
      <p className="CartWidget__txt">{ cantidad || ''}</p>
    </div>
  );
};