import React, { useContext } from "react";
import { FaOpencart } from "react-icons/fa";
import "./CartButton.css";
import AppContext from "../../context/AppContext";


function CartButton() {

  const { cartItems } = useContext(AppContext);

  return (
    <button type="buttom" className="cart__button">
      <FaOpencart />
      <span className="cart-status">
        
      </span>
    </button>
  );
}

export default CartButton;
