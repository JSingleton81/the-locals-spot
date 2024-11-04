import React from 'react';
import TotalUsers from '../components/TotalUsers';
import NewSignups from '../components/NewSignups';
import TotalBusinesses from '../components/TotalBusinesses';
import NewBusinesses from '../components/NewBusinesses';
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