import "./cart.css";
import React from "react";
import { CartProps } from "./CartProps.interface";
import { Product } from "../../interfaces/product.interface";

export function Cart(props: CartProps) {
  const summedPrices = props.productsInCart.reduce(
    (accum: any, item: any) => accum + item.price,
    0
  );

  return (
    <div className="cart-background">
      <div className="products-in-cart">
        {props.productsInCart.map((product: Product) => {
          return (
            <div className="single-cart-product">
              <div className="trash-container">
                <img className="trash-can" src="trash-can.svg"></img>
              </div>
              <div className="cart-product-image-container">
                <img className="cart-product-image" src={product.image}></img>
              </div>
              <div className="cart-product-title">{product.title}</div>
              <div className="cart-product-price">€{product.price}</div>
            </div>
          );
        })}
        <div className="price-sum-wrapper">
          <div className="total">Total: </div>
          <>
            <div className="price-sum">€{summedPrices}</div>
          </>
        </div>
      </div>
    </div>
  );
}
