import React from "react";
import NavbarLimo from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  return (
    <>
      <div>
        <NavbarLimo />
        <Home />
        <Products />
        <About />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
