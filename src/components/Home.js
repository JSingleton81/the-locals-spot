import React from "react";
import BusinessList from "../components/BusinessList";
import "../styles/home.css";


const Home = (props) => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">The Locals Spots</h1>
      </header>
      <div className="home-content">
        <h2>Welcome to The Locals Spots! Discover the best local businesses in your area.</h2>
        <BusinessList />
      </div>
    </div>
  );
};

export default Home;

