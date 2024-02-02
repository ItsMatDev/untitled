import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import useStore, { AuthProvider } from "./store/AuthProvider";

import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: async () => {
          try {
            const response = await fetch(
              `${import.meta.env.VITE_BACKEND_URL}/api/products`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response;
          } catch (error) {
            console.error(error);
            return null;
          }
        },
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        ),
        loader: async () => {
          try {
            const response = await fetch(
              `${import.meta.env.VITE_BACKEND_URL}/api/products`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            return response;
          } catch (error) {
            console.error(error);
            return null;
          }
        },
      },
    ],
  },
]);

function PrivateRoute({ children }) {
  const { auth } = useStore();

  if (auth.user.role === "user") {
    return children;
  }
  return <Navigate to="/login" />;
}

function PublicRoute({ children }) {
  const { auth } = useStore();
  if (auth.user.role === "user") {
    return <Navigate to="/admin" />;
  }
  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
