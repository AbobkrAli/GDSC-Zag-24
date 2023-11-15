import React, { useState, useEffect, createContext } from 'react';

export const cartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);
  const [currentId, setCurrentId] = useState(1);
  const [quan, setQuan] = useState(1);


// existPId = existing product id
  const addToCart = (cartObj) => {
    const existId = cartData.findIndex((product) => product.name === cartObj.name);
  
    if (existId !== -1) {
      // Product with the same name already exists in the cart, update its quantity
      const updatedCartData = [...cartData];
      updatedCartData[existId] = {
        ...updatedCartData[existId],
        quantity: updatedCartData[existId].quantity + cartObj.quantity,
      };
      setCartData(updatedCartData);
    } else {
      // Product is not in the cart, add it
      setCartData([...cartData, { ...cartObj, id: currentId }]);
      setCurrentId(currentId + 1);
    }
  };
  
  

  const removeFromCart = (id) => {
    setCartData(cartData.filter((product) => product.id !== id));
  };


  const values = { cartData, setCartData, addToCart, removeFromCart, currentId, setCurrentId, quan, setQuan };

  return (
    <cartContext.Provider value={values}>
      {props.children}
    </cartContext.Provider>
  );
};
