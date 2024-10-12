import Knife from "../assets/img/Knife.png";
import Star from "../assets/img/Star";
import Scales from "../assets/img/Scales";
import FavouriteIcon from "../assets/img/FavouriteIcon";
import CartIcon from "../assets/img/CartIcon";
import React from "react";

const ProductCard = ({ icon = Knife }) => {
  return (
    <div className="product_item">
      <img src={icon} alt="Knife" className="product_item-img" />
      <h4 className="product_item-name">Нож Лиса</h4>
      <div className="product_item-info">
        <p>95x18</p>
        <p>Орех, Алюминий</p>
      </div>
      <div className="product_item-info">
        <div className="product_stars">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className="product_rewiews">12 отзывов</p>
      </div>
      <hr className="product_item-line" />
      <div className="product_item-info">
        <p className="product_item-price">2 719р.</p>
        <div className="product_item-actions">
          <Scales />
          <FavouriteIcon className="" />
        </div>
      </div>
      <button className="button-main button_product">
        В корзину <CartIcon width={"20px"} color={"white"} />
      </button>
    </div>
  );
};

export default ProductCard;
