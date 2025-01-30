export default function ChatMessage({ user, text }: { user: string; text: string }) {
  const isCurrentUser = user === "Alice" // Replace with actual logic for the current user

  return (
    <div
      className={`flex items-start mb-4 ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        <p className="font-medium">{user}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}
