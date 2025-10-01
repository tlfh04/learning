import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

export default function RequestData() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProduct() {
      const res = await axios("https://dummyjson.com/products");
      const data = res["data"];
      console.log(data);
      setProducts(data["products"]);
    }
    getProduct();
  }, []);
  return (
    <div>
      {products.map((product) => {
        return <Product key={product["id"]} product={product}></Product>;
      })}
    </div>
  );
}
