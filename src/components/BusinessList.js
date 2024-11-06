import React from 'react';
import { Container, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import BusinessItem from "../components/BusinessItem.js";
import "../styles/businessList.css";

const businesses = [
  {
    id: 1,
    img: "",
    business_name: "Bloom Coffee",
    description: "A cozy place for coffee lovers.",
    address: "2300 E Rancier St",
    city: "Killeen",
    state: "TX",
    zip: "76543",
    hours: "Mon-Fri: 7am - 7pm, Sat-Sun: 8am - 5pm",
    location: { lat: 0, lng: 0 },
  },
  {
    id: 2,
    img: "",
    business_name: "Bobby B's",
    description: "BBQ.",
    address: "3601 Zephyr Rd",
    city: "Killeen",
    state: "TX",
    zip: "76543",
    hours: "Mon-Sat: 9am - 9pm, Sun: 10am - 6pm",
    location: { lat: 0, lng: 0 },
  },
  {
    id: 3,
    img: "",
    business_name: "Obok Grill Club",
    description: "Great Bar & Grill",
    address: "2815 S Fort Hood, Killeen, TX",
    hours: "Daily: 8am - 8pm",
    city: "Killeen",
    state: "TX",
    zip:  "76542",
    location: { lat: 0, lng: 0 },
  },
  {
    id: 4,
    img: "",
    business_name: "Generation Barber Shop",
    description: "Hair Cuts For All.",
    address: "15242 Farmer to Market Rd 1825, Pfluger, TX",
    city: "Pflugerville",
    state: "TX",
    zip: "78860",
    hours: "Mon-Fri: 5am - 10pm, Sat-Sun: 6am - 8pm",
    location: { lat: 0, lng: 0 },
  },
  {
    id: 5,
    img: "",
    business_name: "Pet Supply Plus Killeen",
    description: "Pet needs for your babies.",
    address: "3700 W Stan Schlueter Loop #100",
    city: "Killeen",
    state: "TX",
    zip: "76549.",
    hours: "Mon-Sat: 10am - 8pm, Sun: 12pm - 6pm",
    location: { lat: 0, lng: 0 },
  },
];

const BusinessList = () => {
  return (
    <Container maxWidth="lg" className="business-list">
      <Paper elevation={3} className="business-paper">
        <Typography variant="h4" component="h2" gutterBottom>
          Business List
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Business Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>ZIP</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={8}>Additional Information</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {businesses.map((business) => (
              <BusinessItem key={business.id} business={business} />
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default BusinessList;