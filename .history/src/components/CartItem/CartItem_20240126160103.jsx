import React, { useContext } from "react";
import propTypes from "prop-types";
import "./CartItem.css";
import { CiCircleMinus } from "react-icons/ci";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/AppContext";


function CartItem({ data }) {

  const { cartItems } = useContext(AppContext);
  const { id, thumbnail, title, price } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter();
  }

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="imagem do produto" className="cart-item-image"/>
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
      
        <button type="button" className="button__remove-item">
          <CiCircleMinus />
        </button>
      </div>

    </section>
  );
}

export default CartItem;


CartItem.propTypes = {
  data: propTypes.shape
}.isRequired;
