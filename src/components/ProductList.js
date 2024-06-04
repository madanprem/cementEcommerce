// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data';
const ProductList = ({ addToCart, selectedCategory }) => {

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
