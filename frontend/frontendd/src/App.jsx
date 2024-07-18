// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Navbar from './components/navbar/Navbar';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart.jsx';
import LoginSignup from './pages/LoginSignup';
import Hero from './components/navbar/Hero/Hero.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero/>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory category="mens" />} />
          <Route path='/womens' element={<ShopCategory category="womens" />} />
          <Route path='/kids' element={<ShopCategory category="kids" />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup  />} />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
