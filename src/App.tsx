import React, { useEffect, useState } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Product } from "./interfaces/product.interface";
import { TopBar } from "./components/TopBar/TopBar";
import { Routes, Route, useParams } from "react-router-dom";
import { AllProductsPage } from "./components/allProductsPage/AllProductsPage";
import { SingleProductPage } from "./components/singleProductPage/SingleProductPage";
import { Cart } from "./components/cart/Cart";
import axios from "axios";

function App() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setAllProducts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <TopBar />

      <Routes>
        <Route
          path="/product/:id"
          element={<SingleProductPage allProducts={allProducts} />}
        />
        <Route path="/" element={<AllProductsPage apiData={allProducts} />} />
        <Route
          path="/men"
          element={<AllProductsPage apiData={allProducts} />}
        />
        <Route
          path="/women"
          element={<AllProductsPage apiData={allProducts} />}
        />
        <Route
          path="/jewelery"
          element={<AllProductsPage apiData={allProducts} />}
        />
        <Route
          path="/electronics"
          element={<AllProductsPage apiData={allProducts} />}
        />
        {/* <Route path="/singleproduct" element={<SingleProductPage />} /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
