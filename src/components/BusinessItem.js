import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import "../styles/businessList.css";

const BusinessItem = ({ business }) => {
  const placeholderImg = "path/to/placeholder/image.jpg"; // Replace with your placeholder image path

  return (
    <TableRow>
      <TableCell>{business.business_name}</TableCell>
      <TableCell>{business.description}</TableCell>
      <TableCell>{business.address}</TableCell>
      <TableCell>{business.city}</TableCell>
      <TableCell>{business.state}</TableCell>
      <TableCell>{business.zip}</TableCell>
      <TableCell>{business.hours}</TableCell>
      <TableCell>
        <img
          src={business.img || placeholderImg}
          alt={business.business_name}
          style={{ maxWidth: '100px', height: 'auto' }}
        />
      </TableCell>
    </TableRow>
  );
};

export default BusinessItem;