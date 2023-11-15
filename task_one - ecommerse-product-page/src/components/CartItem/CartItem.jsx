import React, { useContext, useState } from 'react'
import './CartItem.css'
import { cartContext } from '../../context/cartContext'
import deleteIcon from '../../assets/icon-delete.svg'
import productImg from '../../assets/image-product-1.jpg'



const CartItem = ({name, price, quantity,id}) => {
  
    const {cartData, removeFromCart} = useContext(cartContext)

  return (
    <div className='cart-item'>
      <div className="image-container">
      <img className='cart-item-image' src={productImg} alt="" />
      </div>
      
      <div className='detail'>
        <p className='cart-item-name'>{name}</p>
        <p >{ price }x{quantity} <span className='cart-item-price'>${Number(price) * Number(quantity)}</span></p>
      </div>
      <img className='cart-item-delete' src={deleteIcon} alt="" onClick={()=>{
        removeFromCart(id)
      }} />

    </div>
  )
}

export default CartItem
