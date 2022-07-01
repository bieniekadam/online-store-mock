import "./singleProductPage.css";
import React, { useEffect, useState } from "react";
import Popup from "../popup/Popup";
import { useParams } from "react-router-dom";

import { SingleProductPageProps } from "./SingleProductPageProps.interface";
import { Product } from "../../interfaces/product.interface";

export function SingleProductPage(props: SingleProductPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    {} as Product
  );

  let { id } = useParams();

  useEffect(() => {
    let foundProduct =
      props.allProducts.find((product) => {
        return product.id === Number(id);
      }) || ({} as Product);
    setSelectedProduct(foundProduct);
  }, [props.allProducts]);

  return (
    <div className="background">
      <div className="single-product-page">
        <div className="image">
          <img src={selectedProduct.image} className="product-image"></img>
        </div>
        <div className="text">
          <div className="single-product-page-title">
            {selectedProduct.title}
          </div>
          {/* <div className="single-product-page-rating">
            {"*" +
              selectedProduct.rating.rate +
              "/5" +
              selectedProduct.rating.count}
          </div> */}
          <div className="description">{selectedProduct.description}</div>
          <div className="single-product-page-price">
            € {selectedProduct.price}{" "}
          </div>
          <div className="single-product-page-add-to-cart-button">
            <Popup />
          </div>
        </div>
      </div>
    </div>
  );
}
