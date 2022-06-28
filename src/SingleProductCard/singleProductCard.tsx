import React from "react";
import "./singleProductCard.css";
import { SingleProductCardProps } from "./singleProductCardProps.interface";

export function SingleProductCard(props: SingleProductCardProps) {
  return (
    <div className="single-product-card-wrapper">
      <div className="photo-container">
        <img className="product-photo" src={props.image}></img>
      </div>
      <div className="name-container">
        <div className="product-name">{props.title}</div>
        <div className="product-price">€{props.price}</div>
        <div className="product-rating">
          ⭐ {props.rating.rate}/5 ({props.rating.count})
        </div>
      </div>
    </div>
  );
}
