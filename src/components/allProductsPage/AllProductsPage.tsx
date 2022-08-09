import React from "react";
import { useEffect, useState } from "react";
import {
  PathCategory,
  Product,
  ProductCategoryPaths,
} from "../../interfaces/product.interface";
import { SingleProductCard } from "../singleProductCard/SingleProductCard";
import { AllProductsPageProps } from "./allProductsPageProps.interface";

export function AllProductsPage(props: AllProductsPageProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const categoryFromPath = window.location.pathname.slice(1);

    if (categoryFromPath === "") {
      setProducts(props.allProductsResponse);
      return;
    }

    const filtered = props.allProductsResponse.filter((product: Product) => {
      return (
        product.category ===
        ProductCategoryPaths[categoryFromPath as PathCategory]
      );
    });

    setProducts(filtered);
  }, [window.location.pathname, props.allProductsResponse]);

  return (
    <div className="products-grid">
      {products.map((product: Product) => (
        <SingleProductCard
          title={product.title}
          category={product.category}
          description={product.description}
          image={product.image}
          rating={product.rating}
          price={product.price}
          id={product.id}
        />
      ))}
    </div>
  );
}
