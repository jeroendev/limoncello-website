import React from "react";
import "./products.css";

const ProductCard = ({ imageSrc, title, description, detailsLink }) => {
  return (
    <div className=" col-md-4">
      <a href={detailsLink} className="card-link">
        <div className="card">
          <img src={imageSrc} alt={title} />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <span className="btn btn-buy">Nu kopen</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
