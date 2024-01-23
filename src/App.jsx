import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarLimo from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Newsletter from "./components/newsletter/Newsletter";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Router>
      <>
        <NavbarLimo />
        <Routes>
          <Route
            path="/cart"
            element={
              <>
                <Cart />
                <Products />
                <About />
                <Newsletter />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home />
                <Products />
                <About />
                <Newsletter />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
