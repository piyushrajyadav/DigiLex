import React from "react";
import Navbar from "../components/Navbar";
import Chatbot from "../components/Chatbot";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to AI Legal Assistant</h1>
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;