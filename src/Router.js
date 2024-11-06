import React from "react";
import { Routes, Navigate, Route } from "react-router";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import BusinessProfile from "./components/BusinessProfile.js";
import UserProfile from "./components/UserProfile.js";
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard.js";
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs.js";
import AddBusiness from "./components/AddBusiness.js";
import UpdateBusiness from "./components/UpdateBusiness.js";
import News from "./pages/News.js";
import {parse} from "cookie";

const checkAuth = () => {
  const cookies = parse(document.cookie);
  console.log("Cookie:", cookies)
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/news" element={<News />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/addBusiness" element={<ProtectedRoute component={AddBusiness} />} />
      <Route path="/updateBusiness/:id" element={<ProtectedRoute component={UpdateBusiness} />} />
      <Route path ="/businessProfile" element={<ProtectedRoute component={BusinessProfile} /> } />
      <Route path ="/userProfile" element={<ProtectedRoute component={UserProfile} /> } />
    </Routes>
  );
};

export default Router;

