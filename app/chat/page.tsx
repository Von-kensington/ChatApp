import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";

export default function ChatPage() {
  const messages = [
    { id: 1, user: "Alice", text: "Hello there!" },
    { id: 2, user: "Bob", text: "Hi Alice! How's it going?" },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Chat Header */}
      <header className="p-4 bg-blue-600 text-white text-lg font-bold">
        Chat Room
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 chat-container">
        {messages.map((message) => (
          <ChatMessage key={message.id} user={message.user} text={message.text} />
        ))}
      </div>

      {/* Input */}
      <ChatInput />
    </div>
  );
}
