import React from "react";
import Navbar from "../components/Navbar";
import DocumentGenerator from "../components/DocumentGenerator";

const LegalDocs = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Legal Documents</h1>
        <DocumentGenerator />
      </div>
    </div>
  );
};

export default LegalDocs;