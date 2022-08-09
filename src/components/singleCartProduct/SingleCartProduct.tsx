import "./singleCartProduct.css";
import React from "react";
import { SingleCartProductProps } from "./SingleCartProductProps.interface";

export function SingleCartProduct(props: SingleCartProductProps) {
  return (
    <div className="background">
      <div className="products-in-cart">
        <div className="single-cart-product">
          <img
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            className="image"
          ></img>

          <div className="title">Men's Cotton Jacket</div>
          <div className="price"> € 55.99</div>
        </div>
        <div className="single-cart-product">
          <img
            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
            className="image"
          ></img>

          <div className="title">Men's Cotton Jacket</div>
          <div className="price"> € 55.99</div>
        </div>
      </div>
    </div>
  );
}
