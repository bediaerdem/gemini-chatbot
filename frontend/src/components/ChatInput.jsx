import { useState } from "react";
import sendMessageToBackend from "../services/chatService";


function ChatInput({ setMessages }) {

  const [input, setInput] = useState("");


  const handleSendMessage = async () => {

    if (!input.trim()) return;


    const userMessage = input;


    // Kullanıcının mesajını ekle
    setMessages((prev) => [
      ...prev,
      {
        text: userMessage,
        sender: "user",
      },
    ]);


    setInput("");


    // Backend'e gönder ve cevabı al
    const reply = await sendMessageToBackend(userMessage);


    // Bot cevabını ekle
    setMessages((prev) => [
      ...prev,
      {
        text: reply,
        sender: "bot",
      },
    ]);

  };


  const onKeyDown = (e) => {

    if (e.key === "Enter") {

      e.preventDefault();

      handleSendMessage();

    }

  };


  return (

    <form
      className="chat-input"
      onSubmit={(e) => {
        e.preventDefault();
        handleSendMessage();
      }}
    >

      <input
        aria-label="Mesaj"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Mesaj yaz..."
      />


      <button 
        type="submit" 
        className="send-btn"
      >
        Gönder
      </button>


    </form>

  );

}


export default ChatInput;