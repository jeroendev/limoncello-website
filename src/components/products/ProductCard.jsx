import React from "react";
import "./products.css";

const ProductCard = ({
  imageSrc,
  title,
  description,
  detailsLink,
  addToCart,
}) => {
  return (
    <div className=" col-md-4">
      <a href={detailsLink} className="card-link">
        <div className="card">
          <img src={imageSrc} alt={title} />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <button
              onClick={() => addToCart({ title, description, imageSrc })}
              className="btn btn-buy"
            >
              Voeg toe aan winkelmandje
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
