import React from 'react';
import TotalUsers from '../pages/TotalUsers';
import NewSignups from '../pages/NewSignups';
import TotalBusinesses from '../pages/TotalBusinesses';
import NewBusinesses from '../pages/NewBusinesses';
import "../styles/dashboard.css"; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-metrics">
        <TotalUsers />
        <NewSignups />
        <TotalBusinesses />
        <NewBusinesses />
      </div>
    </div>
  );
};

export default Dashboard;