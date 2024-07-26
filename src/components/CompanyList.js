// src/components/CompanyList.js
import React, { useState } from 'react';
import ProductCard from './ProductCard';
// src/components/CompanyList.js
import './CompanyList.css';

const CompanyList = ({ products, addToCart }) => {
  const companies = Array.from(new Set(products.map(product => product.company)));

  return (
    <div className="company-list">
      {companies.map(company => (
        <Company key={company} company={company} products={products.filter(product => product.company === company)} addToCart={addToCart} />
      ))}
    </div>
  );
};

const Company = ({ company, products, addToCart }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="company">
      <h3 onClick={toggleExpand}>{company}</h3>
      {isExpanded && (
        <div className="sizes">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyList;
