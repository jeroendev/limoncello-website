import React from "react";
import "./products.css";
import ProductCard from "./ProductCard";
import products from "./data";

const Products = ({ handleClick }) => {
  return (
    <div className="container text-center" id="products">
      <div>
        <hr className=" p-2" />
        <h1 className="font-special mb-md-4 mb-2">Onze producten</h1>
      </div>
      <div className=" row">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} handleClick={handleClick} />
        ))}
      </div>
      <hr className=" p-2" />
    </div>
  );
};

export default Products;
