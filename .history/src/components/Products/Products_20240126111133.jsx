import React, { useState, useEffect } from "react";
import "./Products.css";
import fetchProducts from "../../api/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts("iphone").then((response) => {
      setProducts(response);
    });
  }, []);
  
  return ( 
    <section className="products container">
      {
        products.map((product) => <ProductCard key={products.id} data={{}} />)
      }
    </section>

  );
}

export default Products;
