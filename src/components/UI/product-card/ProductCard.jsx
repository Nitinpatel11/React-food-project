import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, image01, price } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <div className="cart4">
        <h5>
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        </div >
        <div className="Cart1 Cart2">
          <div className="cart3">
          <p className="product__price">₹{price}</p></div>
          <div >
          <button className="addTOCart__btn" onClick={addToCart}>
            Add to Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
