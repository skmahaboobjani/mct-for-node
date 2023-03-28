import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';
import User from './components/User';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/product" element={<Product />} />
  <Route path="/product-details/:id" element={<ProductDetails />} />
  <Route path="/user" element={<User />} />
  <Route path="/contact-us" element={<ContactUs />} />
</Routes>

    </Router>
  );
}

export default App;
