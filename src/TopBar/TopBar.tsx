import React from "react";
import "./TopBar.css";

export function TopBar() {
  return (
    <div className="top-bar-wrapper">
      <div className="top-bar-title">the everything store</div>
      <div className="categories">
        <div className="men category-item">MEN</div>
        <div className="women category-item">WOMEN</div>
        <div className="electronics category-item">ELECTRONICS</div>
        <div className="jewellery category-item">JEWELERY</div>
      </div>

      <img src="shopping-cart.svg" className="shopping-cart"></img>
    </div>
  );
}
