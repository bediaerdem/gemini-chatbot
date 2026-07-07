import { useState } from "react";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";

function App() {

  const [messages, setMessages] = useState([
    {
      text: "Merhaba, sana nasıl yardımcı olabilirim?",
      sender: "bot"
    }
  ]);


  return (
    <div className="app">

      <Header />

      <ChatWindow 
        messages={messages}
        setMessages={setMessages}
      />

    </div>
  );
}

export default App;