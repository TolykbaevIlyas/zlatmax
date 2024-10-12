import React from "react";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  return (
    <section className="new_product">
      <article className="new_product-content container">
        <div className="new_product-item">
          <h3 className="new_product-title">Новинки</h3>
          <p className="new_product-text">
            Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине
            представлен наиболее широкий выбор Златоустовских ножей от
            Златоустовских Оружейных Фабрик и компаний, мы являемся официальными
            поставщиками.
          </p>
          <p className="text-color-gold">Больше новинок</p>
        </div>
        <div className="new_product-products">
          {[1, 2, 3].map(() => (
            <ProductCard />
          ))}
        </div>
      </article>
    </section>
  );
};

export default NewProducts;
