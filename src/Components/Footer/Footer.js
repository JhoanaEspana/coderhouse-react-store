import React from "react";
import "./Footer.css"
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";
import logostore_bn from "../../assets/logostore-bn.svg";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';

export const Footer = () => {


  return(
    <div className="Footer__container">
      <img src={logostore_bn} alt=""/>
      <div Footer__redes>
        <Link to={{ pathname:`https://github.com/JhoanaEspana`}} target="_blank">
          <GitHubIcon sx={{ color: grey[50], margin:[2]}} fontSize="large" />
        </Link>
        <Link to={{ pathname:`https://twitter.com/JhoanaEspana`}} target="_blank">
          <TwitterIcon sx={{ color: grey[50], margin:[2]}} fontSize="large"/>
        </Link>
        <Link to={{ pathname:`https://www.behance.net/JhoEspana`}} target="_blank">
          <LanguageIcon sx={{ color: grey[50], margin:[2]}} fontSize="large"/>
        </Link>
      </div>
      <div>
        <p>©2022, Jhoana España</p>
      </div>
    </div>
  )
}