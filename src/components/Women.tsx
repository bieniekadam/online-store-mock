import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Product } from "../interfaces/product.interface";
import { SingleProductCard } from "../SingleProductCard/singleProductCard";

export function Women() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response: AxiosResponse) => {
        setCategories(response.data);
      });
  }, []);

  return (
    <div className="products-grid">
      hey, it's women!
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
