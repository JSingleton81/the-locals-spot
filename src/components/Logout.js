import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../redux/actions';
import { serialize } from 'cookie';
import "../styles/navBar.css";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = serialize("loggedIn", null, {
      maxAge: 0,
    });
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};


export default connect(null, mapDispatchToProps) (Logout);

