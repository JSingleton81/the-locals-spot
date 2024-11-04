import React, { useState } from "react";
import "../styles/signUp.css"
import { useNavigate } from "react-router";
import { Button, TextField, Container, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {connect } from "react-redux";
import { signUpUser } from "../redux/actions";
import { serialize } from "cookie";



const SignUp = (props) => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword:"",
    role: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`);
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      role: e.target.value,
    }));
  };

  const signUp = (e) => {
    e.preventDefault();
    if (state.password !==state.confirmPassword) {
      alert("Password do not match!");
      return;
    }
    console.log("Signing Up user:", state);
    props.signUpUser(state);
    document.cookie = serialize("loggedIn", true, {path: "/"})
    document.cookie = serialize("role", state.role, {path: "/"})
    console.log("Cookies set:", document.cookie);
    if (state.role === "business") {
      navigate("/businessProfile");
    } else {
      navigate("/userProfile");
    }
  };
  
  return (
    <div>
      <Container maxWidth="sm">
        <form className="sign-up-form" onSubmit={signUp}>
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
            value={state.email}
            name="email"
            label="Email"
            type="email"
          />

          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
          />

          <TextField
            required
            onChange={handleTextChange}
            value={state.confirmPassword}
            name="confirmPassword"
            label="Confirm Password"
            type="password"
          />

          <FormControl fullWidth className="form-control">
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              value={state.role}
              onChange={handleRoleChange}
              name="role"
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="business">Business</MenuItem>

            </Select>  
          </FormControl>

          <Button
            type="submit"
            className="sign-up-button"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        </form>
      </Container>
    </div>
  );
};

const mapDispatchToProps = {
  signUpUser
}


export default connect(null, mapDispatchToProps) (SignUp);

