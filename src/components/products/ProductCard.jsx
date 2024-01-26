import React from "react";

const ProductCard = ({
  imageSrc,
  title,
  description,
  detailsLink,
  productPrice,
}) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <a
          href={detailsLink}
          className="card-link"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img src={imageSrc} alt={title} />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-subtitle mb-2">€ {productPrice}</p>
          </div>
        </a>
        <button className="add-to-cart btn btn-buy">
          Toevoegen aan winkelmandje
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
