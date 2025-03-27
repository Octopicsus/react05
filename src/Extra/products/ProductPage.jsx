import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";

export default function ProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [productId]);

  return (
    <>
      <div>
        {!product && <p>Product it not avalible</p>}
        {!!product && (
          <>
            <h4>{product.title}</h4>
            <p>
              Description: {product.description} <br />
              <img width="100px" src={product.image} />
              <br />
              Price: {product.price}$
            </p>
          </>
        )}
      </div>
      <Link to="/products/">Go back</Link>
    </>
  );
}
