import Message from "./Message";
import ChatInput from "./ChatInput";

function ChatWindow() {
  return (
    <main>
      <Message 
        text="Merhaba, sana nasıl yardımcı olabilirim?"
        sender="bot"
      />

      <ChatInput />
    </main>
  );
}

export default ChatWindow;