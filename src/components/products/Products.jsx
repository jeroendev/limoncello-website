import React from "react";
import "./products.css";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="container text-center" id="products">
      <div>
        <hr className=" p-2" />
        <h1 className="font-special mb-md-4 mb-2">Onze producten</h1>
      </div>
      <div className=" row">
        <ProductCard
          imageSrc="../img/zesty-logo.jpeg"
          title="Limoncello"
          description="Geniet van onze heerlijke limoncello gemaakt van Amalfi citroenen"
          detailsLink="/limoncello"
          productPrice="25.95"
        />
        <ProductCard
          imageSrc="../img/zesty-logo.jpeg"
          title="Arancello"
          description="Geniet van onze heerlijke arancello gemaakt van verse appelsienen"
          detailsLink="/arancello"
          productPrice="24.99"
        />
        <ProductCard
          imageSrc="../img/zesty-logo.jpeg"
          title="Mandarinello"
          description="Mandarinello van de beste Spaanse mandarijnen"
          detailsLink="/mandarinello"
          productPrice="26.99"
        />
      </div>
      <hr className=" p-2" />
    </div>
  );
};

export default Products;
