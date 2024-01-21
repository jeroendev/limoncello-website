import React from "react";
import NavbarLimo from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";

function App() {
  return (
    <>
      <div>
        <NavbarLimo />
        <Home />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
