import React, { useEffect, useState } from 'react';

const TotalUsers = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await fetch('http://localhost:3001/total-users');
        const data = await response.json();
        setTotalUsers(data.totalUsers);
      } catch (error) {
        console.error('Error fetching total users:', error);
      }
    };

    fetchTotalUsers();
  }, []);

  return (
    <div className="metric">
      <h2>Total Users</h2>
      <p>{totalUsers}</p>
    </div>
  );
};

export default TotalUsers;