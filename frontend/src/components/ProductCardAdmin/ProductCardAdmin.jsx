import { useState } from "react";
import PropTypes from "prop-types";
import "./ProductCardAdmin.scss";

function ProductCardAdmin({ id, name, image, price, description }) {
  const [productClicked, setproductClicked] = useState(false);
  const [modify, setModify] = useState(false);
  const [modifiedName, setModifiedName] = useState(name);
  const [modifiedDescription, setModifiedDescription] = useState(description);
  const [modifiedPrice, setModifiedPrice] = useState(price);

  const [modifiedImage, setModifiedImage] = useState(image);

  const deleteProduct = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const updateProduct = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return !modify ? (
    <article
      className={`card-container ${
        productClicked ? "card-container-extended" : ""
      }`}
    >
      <h2 className="card-title">{modifiedName}</h2>
      <div>
        <button
          type="button"
          className="delete-product-button"
          onClick={() => deleteProduct()}
        >
          X
        </button>
        <button
          type="button"
          className="modify-button"
          onClick={() => {
            setModify(true);
          }}
        >
          Modify
        </button>
        <img
          className="card-image"
          src={`src/assets/products/${image}.png`}
          alt=""
        />
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
        <p className="card-description">"{modifiedDescription}"</p>
        <p className="card-price">${modifiedPrice}</p>
      </div>
    </article>
  ) : (
    <article
      className={`card-container ${
        productClicked ? "card-container-extended" : ""
      }`}
    >
      <label htmlFor="card-title" className="card-modify-title-label">
        titre
      </label>
      <input
        className="card-modify-title-input"
        id="card-title"
        value={modifiedName}
        onChange={(e) => setModifiedName(e.target.value)}
      />
      <div>
        <button
          type="button"
          className="delete-product-button"
          onClick={() => deleteProduct()}
        >
          X
        </button>
        <button
          type="button"
          className="modify-button"
          onClick={() => {
            setModify(false);
            updateProduct({
              modifiedName,
              modifiedImage,
              modifiedDescription,
              modifiedPrice,
            });
            window.location.reload();
          }}
        >
          Modify
        </button>
        <label htmlFor="card-image" className="card-modify-image-label">
          image
        </label>
        <input
          type="text"
          className="card-modify-image-input"
          id="card-image"
          value={modifiedImage}
          onChange={(e) => setModifiedImage(e.target.value)}
        />
        <button
          type="button"
          className="more-info-button"
          onClick={() => setproductClicked(!productClicked)}
        >
          {productClicked ? "-" : "+"}
        </button>
      </div>
      <div
        className={`card-more-info card-modify-more-info ${
          productClicked ? "card-more-info-extended" : ""
        }`}
      >
        <label
          htmlFor="card-description"
          className="card-modify-description-label"
        >
          description
        </label>
        <textarea
          className="card-modify-description-input"
          type="text"
          id="card-description"
          value={modifiedDescription}
          onChange={(e) => setModifiedDescription(e.target.value)}
        />
        <label htmlFor="card-description" className="card-modify-price-label">
          price
        </label>
        <input
          className="card-modify-price-input"
          type="text"
          id="card-price"
          value={modifiedPrice}
          onChange={(e) => setModifiedPrice(e.target.value)}
        />
      </div>
    </article>
  );
}

ProductCardAdmin.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCardAdmin;
