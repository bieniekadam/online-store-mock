import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

export function TopBar() {
  return (
    <div className="top-bar-wrapper">
      <Link to="/" className="link">
        <div className="top-bar-title">THE ONLINE STORE</div>
      </Link>
      <div className="categories">
        <Link className="link" to="men">
          <div className="single-category">MEN</div>
        </Link>
        <Link className="link" to="women">
          <div className="single-category">WOMEN</div>
        </Link>
        <Link className="link" to="electronics">
          <div className="single-category">ELECTRONICS</div>
        </Link>
        <Link className="link" to="jewelery">
          <div className="single-category">JEWELERY</div>
        </Link>
      </div>
      <Link className="link" to="cart">
        <img src="shopping-bag.svg" className="shopping-cart"></img>
      </Link>
    </div>
  );
}
