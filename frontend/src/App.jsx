import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import LegalDocs from "./pages/LegalDocs";
import SmartContracts from "./pages/SmartContracts";
import DAOs from "./pages/DAOs";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/legal-docs" element={<LegalDocs />} />
        <Route path="/smart-contracts" element={<SmartContracts />} />
        <Route path="/daos" element={<DAOs />} />
      </Routes>
    </Router>
  );
};

export default App;