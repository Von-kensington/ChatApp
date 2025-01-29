import ChatMessage from "../components/ChatMessage";

export default function ChatPage() {
  const messages = [
    {id: 1, user: "Alice", text: "Hello Bob, how are you?"}, 
    {id: 2, user:"Bob", text:"Hey! I am good thank you!"}
  ];
  return (
   <div>
    <div>
      {messages.map(message => (
        <ChatMessage key={message.id} user={message.user} text={message.text} />)
      )}
    </div>
   </div> 
  );
}
