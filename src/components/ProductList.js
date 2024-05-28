// src/components/ProductList.js
import React from 'react';
import { products } from '../data';
import ProductCard from './ProductCard';

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
