import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    setInput("");

    // Call backend API to get AI response
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      // Add AI response to chat
      setMessages((prev) => [...prev, { text: data.reply, sender: "ai" }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <div className="h-64 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-2 rounded ${
              msg.sender === "user" ? "bg-blue-500 text-white ml-auto" : "bg-gray-300"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Ask me anything..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;