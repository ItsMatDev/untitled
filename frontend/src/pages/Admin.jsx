import { useLoaderData } from "react-router-dom";
import ProductCardAdmin from "../components/ProductCardAdmin/ProductCardAdmin";
import "./Admin.scss";
import NewProduct from "../components/NewProduct/NewProduct";

function Admin() {
  const sunglassesArray = useLoaderData();

  return (
    <>
      <h1 className="admin-title">Welcome Admin</h1>
      <div className="container-all-card">
        {sunglassesArray.map((e) => (
          <ProductCardAdmin
            key={e.id}
            id={e.id}
            name={e.name}
            image={e.image}
            price={e.price}
            description={e.description}
          />
        ))}
        <NewProduct />
      </div>
    </>
  );
}

export default Admin;
