import React from "react";
import Nav from "./Nav";
import ClientsAxios from "./Dashboard/axios/ClientsAxios";
import "../styles/Dashboard.css";

// just using axios in /axios/clients
function Dashboard() {
  return (
    <div className="container">
      <Nav />
      <div className="dashboard">
        <ClientsAxios />
      </div>
    </div>
  );
}

export default Dashboard;
