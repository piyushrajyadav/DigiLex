import React, { useState } from "react";

const ContractReview = () => {
  const [contractFile, setContractFile] = useState(null);
  const [reviewResult, setReviewResult] = useState("");

  const handleFileChange = (e) => {
    setContractFile(e.target.files[0]);
  };

  const handleReview = async () => {
    if (!contractFile) return;

    const formData = new FormData();
    formData.append("file", contractFile);

    try {
      const response = await fetch("/api/review-contract", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setReviewResult(data.review);
    } catch (error) {
      console.error("Error reviewing contract:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Review Smart Contract</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="mb-4"
      />
      <button
        onClick={handleReview}
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        Review Contract
      </button>
      {reviewResult && (
        <div className="mt-4 p-4 bg-white rounded">
          <pre>{reviewResult}</pre>
        </div>
      )}
    </div>
  );
};

export default ContractReview;