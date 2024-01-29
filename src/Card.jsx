import { Padding } from "@mui/icons-material";
import React, { useState } from "react";
import "./ViewProducts.css"
import Rating from '@mui/material/Rating';

function Card({ data }) {
  const [isHover, setIsHover] = useState(false);

  return data?.map((item) => {
    return (
      <div className="cardstyle" style={{margin:18}} onClick={() => setIsHover(true)}>
       
        <div className="imageContainer">
       <img 
         height={190} width={180}  src={item.image} alt="img"></img></div>
        <div className="overText"><p >View Product</p></div>
        <p className="marginName"> {item.name}</p>
        <p className="margin"> {item.brand}</p>
        <div className="priceContainer">
        <p className="margin" style={{textDecoration:"line-through", marginRight:10}}> {item.discount}</p>
        <p className="margin" style={{color:"blue"}}>   ${item.price}</p>
        </div>
        <Rating className="margin" name="read-only" value={item.rating} readOnly />
      </div>
    );
  });
}
export default Card;
