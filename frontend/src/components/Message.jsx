function Message({ text, sender, loading }) {
  return (
    <div className={`message-row ${sender}`}>
      
      <div className="message-bubble">
        {loading ? (
          <span> Gemini düşünüyor...</span>
        ) : (
          text
        )}
      </div>

    </div>
  );
}

export default Message;