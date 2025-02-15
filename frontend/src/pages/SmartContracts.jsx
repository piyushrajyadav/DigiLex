import React from "react";
import Navbar from "../components/Navbar";
import ContractReview from "../components/ContractReview";

const SmartContracts = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Smart Contracts</h1>
        <ContractReview />
      </div>
    </div>
  );
};

export default SmartContracts;