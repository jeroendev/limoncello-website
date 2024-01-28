import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarLimo from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components//Footer";
import Products from "./components/products/Products";
import Contact from "./components/Contact";
import About from "./components/About";
import Newsletter from "./components/Newsletter";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) return;
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleChange = (item, d) => {
    setCart((prevCart) =>
      prevCart.map((data) =>
        data.id === item.id ? { ...data, amount: data.amount + d } : data
      )
    );
  };

  return (
    <Router>
      <>
        <NavbarLimo size={cart.length} />
        <Routes>
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart}
                setCart={setCart}
                handleChange={handleChange}
              />
            }
          />
          <Route path="/" element={<Home />} />
        </Routes>
        <Products handleClick={handleClick} />
        <About />
        <Newsletter />
        <Contact />
        <Footer />
      </>
    </Router>
  );
}

export default App;
