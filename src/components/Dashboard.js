// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css'; // Import the styles for the dashboard

const Dashboard = ({ cartItems }) => {
  return (
    <nav className="dashboard">
      <div className="logo-and-name">
        <img src="/images/logo.png" alt="New JMJ Teel Traders" className="logo" />
        <span className="shop-name">New JMJ Teel Traders</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li className="dropdown">
          <a href="#categories" className="dropbtn">Categories</a>
          <div className="dropdown-content">
            <a href="#steel">Steel</a>
            <a href="#cement">Cement</a>
          </div>
        </li>
        <li><a href="#signin">Sign In</a></li>
        <li className="dropdown">
          <a href="#cart" className="dropbtn">Cart ({cartItems.length})</a>
          <div className="dropdown-content">
            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <p>{item.name} x {item.quantity}</p>
                  <p>${item.price * item.quantity}</p>
                </div>
              ))
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Dashboard;
