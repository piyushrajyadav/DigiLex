import React from "react";
import Navbar from "../components/Navbar";
import DAOCreator from "../components/DAOCreator";

const DAOs = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">DAOs</h1>
        <DAOCreator />
      </div>
    </div>
  );
};

export default DAOs;