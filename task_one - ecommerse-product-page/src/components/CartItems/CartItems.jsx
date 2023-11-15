import React, { useState, useContext } from 'react';
import './CartItems.css';
import { cartContext } from '../../context/cartContext';
import CartItem from '../CartItem/CartItem'; // Assuming you have a CartItem component

const CartItems = () => {
  const { cartData } = useContext(cartContext);

  return (
    <div>
      {cartData.length >0 ? (
        cartData.map((product, index) => (
          <CartItem key={index} name={product.name} price={product.price} quantity={product.quantity} id={product.id} />
        ))
      ) : (
        <p className='no-items'>No items in the cart.</p>
      )}
    </div>
  );
};

export default CartItems;
