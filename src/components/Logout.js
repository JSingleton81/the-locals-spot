import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions';
import { serialize } from 'cookie';
import { eatAllCookies } from "../utils/cookies";

import "../styles/navBar.css";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = serialize("loggedIn", false,  {
      maxAge: 0,
    });
    eatAllCookies()
    window.location.reload();  // going to have to change just using for presentation. //
    dispatch(logoutUser());
    navigate("/");
    console.log("handle logout click", document.cookie)
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      Logout
    </button>
  );
};



export default Logout;

