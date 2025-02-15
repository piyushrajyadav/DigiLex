import { useState } from "react";

const useAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (message) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await response.json();
      return data.reply;
    } catch (error) {
      setError("Failed to send message.");
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading, error };
};

export default useAI;