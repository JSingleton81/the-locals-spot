import React from 'react';
import "../styles/businessList.css";

const BusinessItem = ({ business }) => {
  return (
    <tr>
    <td>{business.business_name}</td>
    <td>{business.description}</td>
    <td>{business.address}</td>
    <td>{business.city}</td>
    <td>{business.state}</td>
    <td>{business.zip}</td>
    <td>{business.hours}</td>
    <td>{business.img && <img src={business.img} alt={business.business_name} style={{ maxWidth: '100px', height: 'auto' }} />}</td>
  </tr>
  );
};

export default BusinessItem;