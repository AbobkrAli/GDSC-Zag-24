import React from 'react'
import './Cart.css'
import CartItems from '../CartItems/CartItems'

const Cart = () => {
  return (
    
      <div>
        <div className='cart'>
          <h2>Cart</h2>
          <CartItems />
          <div className="checkout">
          <button className='checkout'>checkout</button>
          </div>
        </div>
      </div>
    
  )
}

export default Cart
