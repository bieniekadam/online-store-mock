import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { SingleProductCard } from "./SingleProductCard/singleProductCard";
import { Product } from "./interfaces/product.interface";
import { TopBar } from "./TopBar/TopBar";

function App() {
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

  console.log(products);

  return (
    <div className="App">
      <TopBar />
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
        ))}{" "}
      </div>
    </div>
  );
}

export default App;
