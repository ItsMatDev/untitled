import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import login from "../services/auth";
import useStore from "../store/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const { setAuth } = useStore();
  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const email = event.target.email.value;
      const password = event.target.password.value;

      const result = await login(email, password);
      setAuth({ user: result });
      if (result.email) {
        navigate("/admin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="login-form" onSubmit={onSubmit}>
      <label htmlFor="email">email :</label>
      <input type="text" placeholder="enter your email" id="email" />
      <label htmlFor="password">password :</label>
      <input type="password" placeholder="enter your password" id="password" />
      <button type="submit">confirm</button>
    </form>
  );
}

export default Login;
