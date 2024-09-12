import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import logo from "./chatbotImg.svg";
import "./Chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const chatEndRef = useRef(null); // Ref to keep chat scrolled to bottom

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message to chat UI
    const userMessage = { type: "user", text: inputValue };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");

    // Add "is typing" message to chat UI
    const botTypingMessage = { type: "bot", text: "Bot is typing..." };
    setMessages((prevMessages) => [...prevMessages, botTypingMessage]);

    try {
      // Simulate delay for bot response (you can replace with actual fetch)
      setTimeout(async () => {
        // Send message to Flask backend (replace with actual fetch)
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input_text: inputValue }),
        };
        const response = await fetch(
          "http://localhost:5000/predict",
          requestOptions
        );
        const data = await response.json();

        // Replace "is typing" message with bot's actual response
        const botMessage = { type: "bot", text: data.response };
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          botMessage,
        ]);
      }, 1000); // Simulated delay of 1 second
    } catch (error) {
      console.error("Error fetching response:", error);
      // Optionally handle errors
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  // Effect to scroll chat to bottom when new message is added
  useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div>
      <Navbar />
      <div className="page">
        <div className="chat">
          <div className="top-content">
            <img src={logo} className="logo_image" alt="Chatbot Logo" />
            <p className="chatbotTit">How can I help you today?</p>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.type}`}
                style={{
                  maxWidth: `${msg.text.length < 10 ? "auto" : "50%"}`,
                }}
              >
                {msg.text}
              </div>
            ))}
            {/* Ref to keep chat scrolled to bottom */}
            <div ref={chatEndRef}></div>
          </div>

          <input
            className="mess"
            type="text"
            placeholder="Message your virtual assistant"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;