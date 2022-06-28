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
          <div className="category-item">MEN</div>
        </Link>
        <Link className="link" to="women">
          <div className="category-item">WOMEN</div>
        </Link>
        <Link className="link" to="electronics">
          <div className="category-item">ELECTRONICS</div>
        </Link>
        <Link className="link" to="jewelery">
          <div className="category-item">JEWELERY</div>
        </Link>
      </div>

      <img src="shopping-cart.svg" className="shopping-cart"></img>
    </div>
  );
}
