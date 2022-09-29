import React from "react";
import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { grey } from "@mui/material/colors";

export const CartWidget = () => {

  return (
    <div className="header__cart">
      <ShoppingCartIcon sx={{ color: grey[50] }} fontSize="small" />
    </div>
  );
};