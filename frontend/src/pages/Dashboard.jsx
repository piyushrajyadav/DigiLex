import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to your dashboard. Here you can manage your legal documents, contracts, and DAOs.</p>
      </div>
    </div>
  );
};

export default Dashboard;