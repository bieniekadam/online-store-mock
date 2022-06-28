import React, { useEffect, useState } from "react";
import "./App.css";
import axios, { AxiosResponse } from "axios";
import { Product } from "./interfaces/product.interface";
import { TopBar } from "./TopBar/TopBar";
import { Routes, Route } from "react-router-dom";
import { Men } from "./components/Men";
import { Electronics } from "./components/Electronics";
import { Jewelery } from "./components/Jewelery";
import { Women } from "./components/Women";
import { All } from "./components/All";

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

  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Men />} />
        <Route path="/jewelery" element={<Men />} />
        <Route path="/electronics" element={<Men />} />
      </Routes>
    </div>
  );
}

export default App;
