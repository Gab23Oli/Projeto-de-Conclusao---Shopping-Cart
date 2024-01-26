import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from "prop-types";

function Provider({ children }) {
  
  const [products, setProducts] = useState([]);
  const [cartItens, setCartItens] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const value = {
    products,
    setProducts,
    loading, 
    setLoading,
    cartItens, 
    setCartItens,
  };

  return (
    <AppContext.Provider value = {value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
