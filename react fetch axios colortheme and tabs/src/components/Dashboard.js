import React from 'react';
import Nav from './Nav';
import Clients from './Dashboard/separate/Clients';
import Sessions from './Dashboard/separate/Sessions';
import Warnings from './Dashboard/separate/Warnings';
import "../styles/Dashboard.css";

// each child component does the API queries in /separate
function Dashboard() {

    return (
      <div className="container">
        <Nav />
        <div className="dashboard">
          <Clients />
          <Sessions />
          <Warnings />
        </div>
      </div>
    );
};

export default Dashboard;