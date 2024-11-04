import React, { Fragment } from "react";
import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router";
import "../styles/businessProfile.css";

const BusinessProfile = ({ business = {} }) => {
  const navigate = useNavigate();
  console.log(business);

  return (
    <Fragment>
      <Container maxWidth="sm" className="container">
        <div className="business-details">
          <h1>{business.name}</h1>
          <p>{business.description}</p>
          <p>{business.address}</p>
          <p>
            {business.city}, {business.state} {business.zip}
          </p>
          <p>{business.hours}</p>
          {business.img && <img src={business.img} alt={business.name} />}
        </div>
        <Button
          variant="contained"
          color="primary"
          className="add-button"
          onClick={() => navigate("/addBusiness")}
        >
          Add Business
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="update-button"
          onClick={() => navigate(`/updateBusiness/${business.id}`)}
        >
          Update Business{" "}
        </Button>
      </Container>
    </Fragment>
  );
};

export default BusinessProfile;
