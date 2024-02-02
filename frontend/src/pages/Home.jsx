import { useState } from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.png";
import "./Home.scss";

import sunglasses1 from "../assets/products/sunglasses1.png";
import sunglasses2 from "../assets/products/sunglasses2.png";
import sunglasses3 from "../assets/products/sunglasses3.png";

function Home() {
  const [counterSlider, setCounterSlider] = useState(0);

  const handleSliderClick = () => {
    setCounterSlider((prevCounter) => (prevCounter + 1) % 3);
  };

  const sunglassesArray = [
    {
      name: "Glam Gaze",
      price: "30",
      description:
        "Elevate your style with our chic sunglasses collection. Embrace timeless elegance and protect your eyes with a touch of glamour.",
    },
    {
      name: "Elegance Eye",
      price: "50",
      description:
        "Discover sophistication in every shade. Our sunglasses seamlessly blend fashion and function, offering a perfect mix of style and sun",
    },
    {
      name: "Luxe Shade",
      price: "60",
      description:
        "Step into the sun with confidence and grace. Our stylish sunglasses not only shield your eyes but also make a statement.",
    },
  ];

  const moveImgClass = `move${counterSlider !== 0 ? counterSlider : ""}`;

  const currentProduct = sunglassesArray[counterSlider];

  return (
    <article>
      <header>
        <h1 className="product-title">{currentProduct.name}</h1>
        <p className="product-price">${currentProduct.price}</p>
        <p className="product-display-counter">{`0${
          counterSlider + 1
        } / 03`}</p>
      </header>
      <div
        className={`center-background-image center-background-image${
          counterSlider + 1
        }`}
      >
        <img
          className={`product ${moveImgClass}`}
          src={sunglasses1}
          alt="product"
        />
        <img
          className={`product product2 ${moveImgClass}`}
          src={sunglasses2}
          alt="product"
        />
        <img
          className={`product product3 ${moveImgClass}`}
          src={sunglasses3}
          alt="product"
        />
        <footer>
          <Link to="/" className="button-shop">
            SHOP
          </Link>
          <button
            type="button"
            className="button-slider"
            onClick={handleSliderClick}
          >
            <img src={arrow} alt="button switch product" />
          </button>
        </footer>
      </div>
      <p className="product-description">"{currentProduct.description}"</p>
    </article>
  );
}

export default Home;
