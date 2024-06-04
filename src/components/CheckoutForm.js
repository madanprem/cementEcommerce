// src/components/CheckoutForm.js
import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, address, phone });
  };

  return (
    <div className="checkout-form">
      <h2>Checkout Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Address:
          <textarea value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
