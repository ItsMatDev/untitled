import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import "./Products.scss";

function Products() {
  const sunglassesArray = useLoaderData();

  return (
    <div className="container-all-card">
      {sunglassesArray.map((e) => (
        <ProductCard
          key={e.id}
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
