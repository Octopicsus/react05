import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      Products
      {products.length === 0 && <p>No products</p>}
      {products.map((product) => (
        <p key={product.id}>
          <Link to={`/products/${product.id}`}>
            {product.title}
          </Link>
        </p>
      ))}
    </div>
  );
}
