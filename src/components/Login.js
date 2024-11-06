import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import { serialize } from "cookie";
import { setUser } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";
import { createCookie } from "../utils/cookies";
import "../styles/login.css";
import { fetchUserWithClientToken } from "../utils/api";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const login = async (e) => {
    e.preventDefault();
    console.log(state, "loginButton");

    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data, "this is data");

      createCookie("client_token", data.access_token);
      const results = await fetchUserWithClientToken();
      console.log(results);

      // Set cookie here
      document.cookie = serialize("loggedIn", true, {
        maxAge: 60 * 1000,
      });

      dispatch(setUser(state));
      navigate("/");
    } catch (error) {
      console.error("There was a problem with the login request:", error);
    }
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password" // Changed to password type for security
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;