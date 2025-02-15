import React, { useState } from "react";

const DAOCreator = () => {
  const [daoName, setDaoName] = useState("");
  const [daoDescription, setDaoDescription] = useState("");
  const [transactionHash, setTransactionHash] = useState("");

  const handleCreateDAO = async () => {
    if (!daoName.trim() || !daoDescription.trim()) return;

    try {
      const response = await fetch("/api/create-dao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: daoName, description: daoDescription }),
      });
      const data = await response.json();
      setTransactionHash(data.transactionHash);
    } catch (error) {
      console.error("Error creating DAO:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Create a DAO</h2>
      <input
        type="text"
        value={daoName}
        onChange={(e) => setDaoName(e.target.value)}
        placeholder="DAO Name"
        className="p-2 border rounded w-full mb-4"
      />
      <textarea
        value={daoDescription}
        onChange={(e) => setDaoDescription(e.target.value)}
        placeholder="DAO Description"
        className="p-2 border rounded w-full mb-4"
      />
      <button
        onClick={handleCreateDAO}
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        Create DAO
      </button>
      {transactionHash && (
        <div className="mt-4 p-4 bg-white rounded">
          <p>Transaction Hash: {transactionHash}</p>
        </div>
      )}
    </div>
  );
};

export default DAOCreator;