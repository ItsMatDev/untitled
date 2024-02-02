import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./ProductCard.scss";
import sunglasses1 from "../../assets/products/sunglasses1.png";
import sunglasses2 from "../../assets/products/sunglasses2.png";
import sunglasses3 from "../../assets/products/sunglasses3.png";
import sunglasses4 from "../../assets/products/sunglasses4.png";
import sunglasses5 from "../../assets/products/sunglasses5.png";
import sunglasses6 from "../../assets/products/sunglasses6.png";

function ProductCard({ name, image, price, description }) {
  const [productClicked, setproductClicked] = useState(false);

  const getImageSource = () => {
    switch (image) {
      case "sunglasses1":
        return sunglasses1;
      case "sunglasses2":
        return sunglasses2;
      case "sunglasses3":
        return sunglasses3;
      case "sunglasses4":
        return sunglasses4;
      case "sunglasses5":
        return sunglasses5;
      case "sunglasses6":
        return sunglasses6;
      default:
        return "";
    }
  };

  return (
    <article
      className={`card-container ${
        productClicked ? "card-container-extended" : ""
      }`}
    >
      <h2 className="card-title">{name}</h2>
      <div>
        <img className="card-image" src={getImageSource()} alt="" />
        <Link to="/" className="button-shop button-shop-card">
          SHOP
        </Link>
        <button
          type="button"
          className="more-info-button"
          onClick={() => setproductClicked(!productClicked)}
        >
          {productClicked ? "-" : "+"}
        </button>
      </div>
      <div
        className={`card-more-info ${
          productClicked ? "card-more-info-extended" : ""
        }`}
      >
        <p className="card-description">"{description}"</p>
        <p className="card-price">${price}</p>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
