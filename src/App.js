// src/App.js
import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import CheckoutForm from './components/CheckoutForm';
import Footer from './components/Footer'
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  const handleCheckout = () => {
    setShowCheckout(true);
    setShowCart(false);
  };

  const handleSubmitOrder = (details) => {
    alert(`Order placed successfully! Details: ${JSON.stringify(details)}`);
    setShowCheckout(false);
    // Clear the cart after successful order
    setCartItems([]);
  };

  return (
    <div className="App">
      <header>
        <h1>New JMJ Teel Traders</h1>
      </header>
      <Dashboard showCart={showCart} setShowCart={setShowCart} />
      {showCheckout ? (
        <CheckoutForm onSubmit={handleSubmitOrder} />
      ) : showCart ? (
        <Cart cartItems={cartItems} onCheckout={handleCheckout} />
      ) : (
        <ProductList addToCart={addToCart} />
      )}
      <Footer/>
    </div>
  );
};

export default App;
