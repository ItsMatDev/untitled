import { useState } from "react";
import "./NewProduct.scss";

function NewProduct() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const onAddProduct = async (data) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/products/`,
        {
          method: "POST",
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

  const handleSubmit = () => {
    onAddProduct(formData);
    setFormData({
      name: "",
      image: "",
      price: "",
      description: "",
    });
  };
  const [openAddProduct, setOpenAddProduct] = useState();
  return !openAddProduct ? (
    <article className="card-container card-add-container">
      <button
        className="button-add-product"
        type="button"
        onClick={() => setOpenAddProduct(true)}
      >
        +
      </button>
    </article>
  ) : (
    <article className="card-container">
      <form className="new-product-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="image">Image:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          className="add-description"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>
    </article>
  );
}

export default NewProduct;
