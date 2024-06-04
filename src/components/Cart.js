// src/components/Cart.js
import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onCheckout }) => {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={onCheckout} className="checkout-button">Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
