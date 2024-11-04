import React, { Fragment, useEffect, useState } from "react";
import { TextField, Container, Button, Dialog,DialogActions, DialogContent,DialogContentText,DialogTitle, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
// import { connect } from "react-redux";
// import { addBusiness } from "../redux/actions";
import "../styles/businessProfile.css";
import { addBusiness } from "../utils/api";
import { useNavigate } from "react-router";

const AddBusiness = () => {
  // console.log(addBusiness);
  const nav = useNavigate()

  const [state, setState] = useState({
    business_name: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    category: "",
  });

  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([])

  useEffect(()=>{
    if(!categories.length){
      const categoryList = async () => {

        const response = await fetch(process.env.REACT_APP_API_URL + '/category-list')
        const results = await response.json()
        console.log(results, 'results from add biz effect')
        setCategories(results)
      }
      categoryList()
    }
  },[categories])
  useEffect(()=>{
    console.log(state)
  },[state])

  
  const handleClickOpen =() => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`);
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setState((prevState) => ({
  //       ...prevState,
  //       img: reader.result,
  //     }));
  //   };
  //   reader.readAsDataURL(file);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickOpen();
  };

  const addBusinessHandler = () => {
    addBusiness(state)
    nav('/userProfile')
  }

  return (
    <Fragment>
      <Container maxWidth="sm" className="container">
        <form onSubmit={handleSubmit} className="form-container">
          {/* <input
            accept="image/*"
            type="file"
            onChange={handleImageChange}
            className="image-input"
            autoComplete="off"
          /> */}

          <TextField
            required
            onChange={handleTextChange}
            value={state.business_name}
            name="business_name"
            label="Business Name"
            type="text"
            className="text-field"
            fullWidth
            autoComplete="organization"
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
            autoComplete="off"
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
            autoComplete="street-address"
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
            autoComplete="address-level2"
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
            autoComplete="address-level1"
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
            autoComplete="postal-code"
          />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            name="category"
            id="category"
            value={state.category}
            // defaultValue="Choose a category"
            label="Category"
            onChange={handleTextChange}
            >
            {categories.map(category => (

              <MenuItem key={category.id} value={category.id}>{category.category}</MenuItem>
            ))}
          </Select>   
        </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="save-button"
          >
            Save Profile
          </Button>
        </form>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Confirm Business Profile"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to save this business profile?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={addBusinessHandler}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

// const mapDispatchToProps = {
//   addBusiness,
// };

// export default connect(null, mapDispatchToProps)(AddBusiness);
export default AddBusiness;
