import React, { useEffect, useState } from 'react';

const NewSignups = () => {
  const [newSignups, setNewSignups] = useState(0);

  useEffect(() => {
    const fetchNewSignups = async () => {
      try {
        const response = await fetch('http://localhost:3001/new-signups');
        const data = await response.json();
        setNewSignups(data.newSignups);
      } catch (error) {
        console.error('Error fetching new signups:', error);
        setNewSignups(0);
      }
    };

    fetchNewSignups();
  }, []);

  return (
    <div className="metric">
      <h2>New Signups (Last 72 Hours)</h2>
      <p>{newSignups}</p>
    </div>
  );
};

export default NewSignups;