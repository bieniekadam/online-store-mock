import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import {
  Product,
  ProductCategory,
  ProductCategoryPaths,
} from "../interfaces/product.interface";
import { SingleProductCard } from "../SingleProductCard/singleProductCard";

export function Men() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState();

  function findMen(item: { category: string }) {
    return item.category == window.location.pathname;
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(
        response.data.filter((product: Product) => {
          return (
            product.category ===
            ProductCategoryPaths[
              window.location.pathname.slice(
                1
              ) as keyof typeof ProductCategoryPaths
            ]
          );
        })
      );
    });
  }, [window.location.pathname]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response: AxiosResponse) => {
        setCategories(response.data);
      });
  }, []);

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
        />
      ))}
    </div>
  );
}
