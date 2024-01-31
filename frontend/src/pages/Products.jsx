import ProductCard from "../components/Navbar/ProductCard/ProductCard";
import "./Products.scss";
import sunglasses1 from "../assets/products/sunglasses1.png";
import sunglasses2 from "../assets/products/sunglasses2.png";
import sunglasses3 from "../assets/products/sunglasses3.png";

function Products() {
  const sunglassesArray = [
    {
      name: "Glam Gaze",
      image: sunglasses1,
      price: "30",
      description:
        "Elevate your style with our chic sunglasses collection. Embrace timeless elegance and protect your eyes with a touch of glamour.",
    },
    {
      name: "Elegance Eye",
      image: sunglasses2,
      price: "50",
      description:
        "Discover sophistication in every shade. Our sunglasses seamlessly blend fashion and function, offering a perfect mix of style and sun",
    },
    {
      name: "Luxe Shade",
      image: sunglasses3,
      price: "60",
      description:
        "Step into the sun with confidence and grace. Our stylish sunglasses not only shield your eyes but also make a statement.",
    },
  ];
  return (
    <div className="container-all-card">
      {sunglassesArray.map((e) => (
        <ProductCard
          name={e.name}
          image={e.image}
          price={e.price}
          description={e.description}
        />
      ))}
    </div>
  );
}

export default Products;
