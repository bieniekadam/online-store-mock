import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

useEffect(() => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response: AxiosResponse) => {
      setProducts(response.data.offers);
    });
}, []);

function App() {
  return <div className="App">cze</div>;
}

export default App;
