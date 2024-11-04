import React, { useEffect, useState } from 'react';

const TotalBusinesses = () => {
  const [totalBusinesses, setTotalBusinesses] = useState(0);

  useEffect(() => {
    const fetchTotalBusinesses = async () => {
      try {
        const response = await fetch('http://localhost:3001/total-businesses');
        const data = await response.json();
        setTotalBusinesses(data.totalBusinesses);
      } catch (error) {
        console.error('Error fetching total businesses:', error);
      }
    };

    fetchTotalBusinesses();
  }, []);

  return (
    <div className="metric">
      <h2>Total Businesses</h2>
      <p>{totalBusinesses}</p>
    </div>
  );
};

export default TotalBusinesses;