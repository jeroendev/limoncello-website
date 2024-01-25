import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarLimo from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Newsletter from "./components/newsletter/Newsletter";
import ShoppingCart from "./components/cart/ShoppingCart";

function App() {
  return (
    <Router>
      <>
        <NavbarLimo />
        <Routes>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Products />
        <About />
        <Newsletter />
        <Contact />
        <Footer />
      </>
    </Router>
  );
}

export default App;
