import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ name }) => {
  return (
    <section className="product">
      <h3 className="product-title container">{name}</h3>
      <article className="product_content container">
        {[1, 2, 3, 4].map((item) => (
          <ProductCard />
        ))}
      </article>
    </section>
  );
};

export default ProductSection;
