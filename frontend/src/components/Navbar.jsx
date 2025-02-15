import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          AI Legal Assistant
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          <Link to="/legal-docs" className="hover:text-blue-200">
            Legal Docs
          </Link>
          <Link to="/smart-contracts" className="hover:text-blue-200">
            Smart Contracts
          </Link>
          <Link to="/daos" className="hover:text-blue-200">
            DAOs
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;