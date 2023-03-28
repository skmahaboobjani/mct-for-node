import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css'; 

function Product() {
  const [electronicProducts, setElectronicProducts] = useState([]);
  const [jewelleryProducts, setJewelleryProducts] = useState([]);

  useEffect(() => {
    axios.get('/electronic-products')
      .then(res => {
        setElectronicProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    axios.get('/jewellery-products')
      .then(res => {
        setJewelleryProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Men Clothing Products</h2>
      {electronicProducts.map(product => (
        <div key={product.id} className="product-container">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
      <h2>Jewellery Products</h2>
      {jewelleryProducts.map(product => (
        <div key={product.id} className="product-container">
          <img src={product.image} alt={product.name} className="product-image" />
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
