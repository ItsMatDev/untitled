import { useState } from "react";
import PropTypes from "prop-types";
import "./ProductCard.scss";

function ProductCard({ name, image, price, description }) {
  const [producClicked, setproducClicked] = useState(false);
  return (
    <article
      className={`card-container ${producClicked ? "card-more-info" : ""}`}
    >
      <h2 className="card-title">{name}</h2>
      <div>
        <img className="card-image" src={image} alt="" />
        <button type="button" onClick={() => setproducClicked(!producClicked)}>
          Click here
        </button>
      </div>
      {producClicked && (
        <div className="card-more-info">
          <p className="card-description">"{description}"</p>
          <p>${price}</p>
        </div>
      )}
    </article>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
