// src/components/ProductCard.js
import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div className="quantity-control">
        <input 
          type="number" 
          value={quantity} 
          min="1"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
