"use client";

import { useState } from "react";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Send message:", message); // Replace with send logic
      setMessage("");
    }
  };

  return (
    <div className="p-4 bg-white border-t border-gray-200 flex items-center">
      <input
        type="text"
        className="flex-1 p-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
      >
        Send
      </button>
    </div>
  );
}