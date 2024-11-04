import React, { useEffect, useState } from "react";
import { TextField, Container, Button } from "@mui/material";
import { connect } from "react-redux";
import { updateBusiness } from "../redux/actions";
import "../styles/businessProfile.css";

const UpdateBusiness = ({ business = {}, updateBusiness }) => {
  const [state, setState] = useState({
    id: business.id || "",
    img: "",
    name: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    hours: "",
  });

  useEffect(() => {
    if (business) {
      setState({
        id: business.id || "",
        img: business.img || "",
        name: business.name || "",
        description: business.description || "",
        address: business.address || "",
        city: business.city || "",
        state: business.state || "",
        zip: business.zip || "",
        hours: business.hours || "",
      });
    }
  }, [business]);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setState((prevState) => ({
        ...prevState,
        img: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBusiness(state);
  };

  return (
    <Container maxWidth="sm" className="container">
      <form onSubmit={handleSubmit} className="form-container">
      <input
          accept="image/*"
          type="file"
          onChange={handleImageChange}
          className="image-input"
        />

        <TextField
          required
          onChange={handleTextChange}
          value={state.name}
          name="name"
          label="Business Name"
          type="text"
          className="text-field"
          fullWidth
        />

        <TextField
          required
          onChange={handleTextChange}
          value={state.description}
          name="description"
          label="Description"
          type="text"
          className="text-field"
          fullWidth
        />

        <TextField
          required
          onChange={handleTextChange}
          value={state.address}
          name="address"
          label="Address"
          type="text"
          className="text-field"
          fullWidth
        />

        <TextField
          required
          onChange={handleTextChange}
          value={state.city}
          name="city"
          label="City"
          type="text"
          className="text-field"
          fullWidth
        />

        <TextField
          required
          onChange={handleTextChange}
          value={state.state}
          name="state"
          label="State"
          type="text"
          className="text-field"
          fullWidth
        />

        <TextField
          required
          onChange={handleTextChange}
          value={state.zip}
          name="zip"
          label="Zip Code"
          type="text"
          className="text-field"
          fullWidth
        />

        <TextField
          required
          onChange={handleTextChange}
          value={state.hours}
          name="hours"
          label="Hours"
          type="text"
          className="text-field"
          fullWidth
        />


        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="save-button"
        >
          Update Business
        </Button>
      </form>
    </Container>
  );
};

const mapDispatchToProps = {
  updateBusiness,
};

export default connect(null, mapDispatchToProps)(UpdateBusiness);