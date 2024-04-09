import React, { useState } from "react";
import { sendChatMessage } from "../Services/apiService";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: currentMessage,
      sender: "user",
    };
    setMessages((messages) => [...messages, userMessage]);
    setCurrentMessage("");

    try {
      const response = await sendChatMessage(currentMessage);

      const botMessage = {
        id: Date.now() + 1,
        text: response.message,
        sender: "bot",
      };
      setMessages((messages) => [...messages, botMessage]);
    } catch (error) {
      console.error("Error al recibir la respuesta de la API:", error);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Escribe tu mensaje aquí..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default ChatComponent;
