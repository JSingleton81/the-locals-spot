import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
// import {serialize } from "cookie";
import Logout from "../components/Logout";
import { useSelector } from "react-redux";
import "../styles/navBar.css";

const NavBar = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // const handleLogout = () => {
  //   document.cookie = serialize("loggedIn, null", {
  //     maxAge: 0,
  //   });
  //   navigate("/login")
  // }

  return (
    <AppBar position="relative">
      <Toolbar>
        <IconButton color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            onClick={() => {
              navigate("/");
              handleMenuClose();
            }}
          >
            HOME
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/about");
              handleMenuClose();
            }}
          >
            ABOUT US
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/contact");
              handleMenuClose();
            }}
          >
            CONTACT US
          </MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/news");
              handleMenuClose();
            }}
          >
            NEWS
          </MenuItem>
        </Menu>
        <Typography variant="h6" style={{ flexGrow: "1" }}>
          The Locals Spots
        </Typography>
        <ul className="nav-list">
          {user ? (
            <>
              <li className="nav-list-item">
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/businessProfile"
                >
                  Welcome: {user.username}
                </Link>
              </li>
              <li className="nav-list-item">
                <Link
                  style={{ textDecoration: "none", color: "inherit" }}
                  to="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-list-item">
                <Logout />
              </li>
            </>
          ) : (
            <>
              <li className="nav-list-item" onClick={() => navigate("/login")}>
                Login
              </li>
              <li className="nav-list-item" onClick={() => navigate("/signUp")}>
                SignUp
              </li>
            </>
          )}
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
