// src/components/Dashboard.js
import React from 'react';
import './Dashboard.css';

const Dashboard = ({ showCart, setShowCart, setSelectedCategory }) => {
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
            <a href="#steel" onClick={() => setSelectedCategory('Steel')}>Steel</a>
            <a href="#cement" onClick={() => setSelectedCategory('Cement')}>Cement</a>
            <a href="#bindingwire" onClick={() => setSelectedCategory('Bindingwire')}>Bindingwire</a>
            <a href="#coveringBox" onClick={() => setSelectedCategory('CoveringBox')}>CoveringBox</a>

          </div>
        </li>
        <li><a href="#signin">Sign In</a></li>
        <li><a href="#cart" onClick={() => setShowCart(!showCart)}>Cart</a></li>
      </ul>
    </nav>
  );
};

export default Dashboard;
