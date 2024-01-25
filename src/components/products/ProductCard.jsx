import React from "react";
import "./products.css";

const ProductCard = ({
  imageSrc,
  title,
  description,
  detailsLink,
  productPrice,
}) => {
  return (
    <div className=" col-md-4">
      <a
        href={detailsLink}
        className="card-link "
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="card">
          <img src={imageSrc} alt={title} />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className=" card-subtitle mb-2">€ {productPrice}</p>
            <button
              href="#"
              data-name={title}
              data-price={productPrice}
              class="add-to-cart btn btn-buy"
            >
              Toevoegen aan winkelmandje
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;
