import React, { useState, useEffect } from "react";
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
