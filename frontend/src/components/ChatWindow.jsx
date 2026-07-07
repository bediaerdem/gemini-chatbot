import { useEffect, useRef } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
import "../styles/chat.css";

function ChatWindow({ messages, setMessages }) {

  const messagesRef = useRef(null);

  useEffect(() => {
    const el = messagesRef.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat-window">

      <div className="messages" ref={messagesRef}>
        {messages.map((message, index) => (
          <Message 
            key={index}
            text={message.text}
            sender={message.sender}
            loading={message.loading}
          />
        ))}
      </div>

      <ChatInput setMessages={setMessages} />

    </div>
  );
}

export default ChatWindow;