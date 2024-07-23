import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Shop from "./pages/Shop";
import Navbar from "./components/navbar/Navbar";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart.jsx";
import LoginSignup from "./pages/LoginSignup";
import Hero from "./components/navbar/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import men_banner from "./components/Assets/banner_mens.png";
import women_banner from "./components/Assets/banner_women.png";
import kid_banner from "./components/Assets/banner_kids.png";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ConditionalHero />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

const ConditionalHero = () => {
  const location = useLocation();
  const showHero = location.pathname === "/";
  return showHero ? <Hero /> : null;
};

export default App;