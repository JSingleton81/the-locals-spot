import React, { useEffect, useState } from 'react';

const NewBusinesses = () => {
  const [newBusinesses, setNewBusinesses] = useState([]);

  useEffect(() => {
    const fetchNewBusinesses = async () => {
      try {
        const response = await fetch('http://localhost:3001/new-businesses');
        const data = await response.json();
        setNewBusinesses(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching new businesses:', error);
      }
    };

    fetchNewBusinesses();
  }, []);

  return (
    <div className="metric">
      <h2>New Businesses (Last 72 Hours)</h2>
      <ul>
        {newBusinesses.map((business) => (
          <li key={business.id}>{business.business_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewBusinesses;