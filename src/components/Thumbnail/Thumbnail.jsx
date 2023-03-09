import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./thumbnail.css";

export const Thumbnail = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="thumbnail" props={props}>
      <img className="thumbnail-img" src={productImage} alt="Thumbnail" />
      <div className="description">
        <p>{productName}</p>
        <p> ${price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};
