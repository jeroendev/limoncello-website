import React from "react";
import "./products.css";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div className="container text-center">
      <div>
        <hr className=" p-2" />
        <h3 className="products-subtitle mb-md-4 mb-2">Onze producten</h3>
      </div>
      <div className=" row">
        <ProductCard
          imageSrc="../img/zesty-logo.jpeg"
          title="Limoncello"
          description="Geniet van onze heerlijke limoncello gemaakt van Amalfi citroenen"
          detailsLink="/limoncello"
        />
        <ProductCard
          imageSrc="../img/zesty-logo.jpeg"
          title="Arancello"
          description="Geniet van onze heerlijke arancello gemaakt van bio appelsienen"
          detailsLink="/arancello"
        />
        <ProductCard
          imageSrc="../img/zesty-logo.jpeg"
          title="Mandarinello"
          description="Geniet van onze heerlijke limoncello gemaakt van verse mandarijnen"
          detailsLink="/mandarinello"
        />
      </div>
      <hr className=" p-2" />
    </div>
  );
};

export default Products;
