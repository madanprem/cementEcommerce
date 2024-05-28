// src/App.js
import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  return (
    <div className="App">
      <header>
        <h1>New JMJ Teel Traders</h1>
      </header>
      
      <Dashboard cartItems={cartItems} />
      <ProductList addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default App;
