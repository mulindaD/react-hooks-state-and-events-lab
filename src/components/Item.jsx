import React, { useState } from "react";

function Item({ name, category }) {
  const [ inCart,setInCart ] = useState(false)
  
  function handleCart(){
    setInCart((inCart)=> !inCart)
  }

  return (
    <li className={ inCart === false? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{ inCart === false ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
