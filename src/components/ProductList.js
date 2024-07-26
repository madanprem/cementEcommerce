// src/components/ProductList.js
import React from 'react';
import CompanyList from './CompanyList';
import ProductCard from './ProductCard';

const ProductList = ({ addToCart, selectedCategory }) => {
  const products = [
    { id: 1, name: '8mm Steel Rod', description: 'High quality steel rod', price: 100, category: 'Steel', company: 'Jindal', size: '8mm', image: '/images/steel-rod.jpg' },
    { id: 2, name: '10mm Steel Rod', description: 'High quality steel rod', price: 120, category: 'Steel', company: 'Jindal', size: '10mm', image: '/images/steel-rod.jpg' },
    { id: 3, name: '8mm Steel Rod', description: 'High quality steel rod', price: 100, category: 'Steel', company: 'JSW', size: '8mm', image: '/images/steel-rod.jpg' },
    { id: 4, name: '10mm Steel Rod', description: 'High quality steel rod', price: 120, category: 'Steel', company: 'JSW', size: '10mm', image: '/images/steel-rod.jpg' },
    { id: 5, name: 'Birla Cement Bag', description: '50kg cement bag', price: 50, category: 'Cement', image: '/images/birla.png' },
    { id: 6, name: 'Ultratech Cement Bag', description: '50kg cement bag', price: 50, category: 'Cement', image: '/images/ut.jpg' },
    { id: 7, name: 'Ultratech Cement Bag', description: '50kg cement bag', price: 50, category: 'Cement', image: '/images/ut.jpg' },
    { id: 8, name: 'Ultratech Cement Bag', description: '50kg cement bag', price: 50, category: 'Cement', image: '/images/ut.jpg' },
    { id: 9, name: 'Ultratech Cement Bag', description: '50kg cement bag', price: 50, category: 'Cement', image: '/images/ut.jpg' },
    { id: 10, name: 'Ultratech Cement Bag', description: '50kg cement bag', price: 50, category: 'Cement', image: '/images/ut.jpg' },
    
    { id: 11, name: '50kg BW', description: '50kg BW', price: 50, category: 'Bindingwire', image: '/images/bw.jpg' },
    { id: 12, name: 'Covering Box', description: 'Covering Box', price: 50, category: 'CoveringBox', image: '/images/coveringBox.jpg' },
    
    // Add more products as needed
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="product-list">
      {selectedCategory === 'Steel' ? (
        <CompanyList products={filteredProducts} addToCart={addToCart} />
      ) : (
        filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))
      )}
    </div>
  );
};

export default ProductList;
